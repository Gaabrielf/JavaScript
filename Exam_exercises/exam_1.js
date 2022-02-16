// Exercise 1
// Scale riddle. With 8 balls :) EXAM [1,2,1,1,1,1,1,1]. One of the items will be change to two. Indexes are to be chosen at random. Use comparing of weights only two times.

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let arr = [];
for (let i = 0; i < 8; i++) {
  arr.push(1);
}

arr[getRandom(0, 7)] = 2;
console.log(arr);

let arr1 = arr.slice(0, 3);
let arr2 = arr.slice(3, 6);
let arr3 = arr.slice(6);

function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

function heaviestBallIndex() {
  if (sumArray(arr1) > sumArray(arr2)) {
    if (arr1[0] > arr1[1]) {
      return 0;
    } else if (arr1[0] < arr1[1]) {
      return 1;
    } else {
      return 2;
    }
  } else if (sumArray(arr1) < sumArray(arr2)) {
    if (arr2[0] > arr2[1]) {
      return 3;
    } else if (arr2[0] < arr2[1]) {
      return 4;
    } else {
      return 5;
    }
  } else {
    if (arr3[0] > arr3[1]) {
      return 6;
    } else {
      return 7;
    }
  }
}

console.log(heaviestBallIndex());
