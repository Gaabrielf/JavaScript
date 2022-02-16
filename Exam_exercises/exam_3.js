// Exercise 3
// Solve sudoku.

const board = [
    ['7', '.', '4', '8', '.', '.', '3', '.', '1'],
    ['8', '2', '.', '5', '.', '.', '.', '4', '.'],
    ['.', '.', '9', '4', '3', '.', '5', '.', '.'],
    ['3', '1', '.', '.', '.', '.', '8', '.', '7'],
    ['.', '8', '.', '.', '.', '.', '.', '1', '.'],
    ['9', '.', '7', '.', '.', '.', '.', '3', '2'],
    ['.', '.', '6', '.', '1', '5', '4', '.', '.'],
    ['.', '7', '.', '.', '.', '9', '.', '6', '5'],
    ['5', '.', '8', '.', '.', '2', '1', '.', '3'],
];


function sudokuSolver(data) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (data[i][j] == '.') {
        for (let k = 1; k <= 9; k++) {
          if (isValid(data, i, j, k)) {
            data[i][j] = `${k}`;
          if (sudokuSolver(data)) {
           return true;
          } else {
           data[i][j] = '.';
          }
         }
       }
       return false;
     }
   }
 }
 return true;
}

function isValid(board, row, column, k) {
    for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(column / 3) + i % 3;
        if (board[row][i] == k || board[i][column] == k || board[m][n] == k) {
          return false;
        }
    }
    return true;
}

sudokuSolver(board);
console.log(board);