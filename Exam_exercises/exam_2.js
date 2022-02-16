// Exercise 2
// Create a solution that will tell us what poker set we have. The solution is to deal us 5 cards from the standard 52 card deck. After that the solution is to tell us what is the best poker set.

function deck() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
  ];
  const colours = ["H", "D", "S", "C"];

  const cards = [];
  for (let i = 0; i < colours.length; i++) {
    for (let j = 0; j < values.length; j++) {
      const colour = colours[i];
      const value = values[j];
      cards.push({ value, colour });
    }
  }
  return cards;
}

function shuffleDeck(cards) {
  for (var i = 0; i < 52; i++) {
    var tempCard = cards[i];
    var randomIndex = Math.floor(Math.random() * 52);
    cards[i] = cards[randomIndex];
    cards[randomIndex] = tempCard;
  }
}

var testDeck = deck();
shuffleDeck(testDeck);
console.log(testDeck);

var fiveCardHand = testDeck.splice(0, 5);
console.log(fiveCardHand);

function flush(fiveCardHand) {
  for (i = 0; i < fiveCardHand.length; i++) {
    if (fiveCardHand[0].colour !== fiveCardHand[i].colour) {
      return false;
    }
  }
  return true;
}

function straight(fiveCardHand) {
  fiveCardHand.sort((a, b) => a.value - b.value);
  for (i = 0; i < fiveCardHand.length - 1; i++) {
    if (fiveCardHand[i].value + 1 !== fiveCardHand[i + 1].value) {
      return false;
    }
  }
  return true;
}

let handOfNumbers = [];
for (i = 0; i < fiveCardHand.length; i++) {
  handOfNumbers.unshift(fiveCardHand[i].value);
}

function royalFlush(fiveCardHand) {
  if (flush(fiveCardHand)) {
    for (i = 10; i <= 14; i++) {
      if (!handOfNumbers.includes(i)) {
        return false;
      }
    }
    return true;
  }
}

function fourOfAKind(fiveCardHand) {
  let target = handOfNumbers[0];
  let count = 1;
  for (i = 1; i < handOfNumbers.length; i++) {
    while (handOfNumbers[i] === target) {
      count++;
      if (count === 4) {
        return true;
      } else {
        return false;
      }
    }
  }

  target = handOfNumbers[1];
  count = 1;

  for (i = 2; i < handOfNumbers.length; i++) {
    while (handOfNumbers[i] === target) {
      count++;
      if (count === 4) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function threeOfAKind(fiveCardHand) {
  let target = handOfNumbers[0];
  let count = 1;
  for (i = 1; i < handOfNumbers.length; i++) {
    while (handOfNumbers[i] === target) {
      count++;
      if (count === 3) {
        return true;
      } else {
        return false;
      }
    }
  }

  target = handOfNumbers[1];
  count = 1;

  for (i = 2; i < handOfNumbers.length; i++) {
    while (handOfNumbers[i] === target) {
      count++;
      if (count === 3) {
        return true;
      } else {
        return false;
      }
    }
  }

  target = handOfNumbers[2];
  count = 1;

  for (i = 3; i < handOfNumbers.length; i++) {
    while (handOfNumbers[i] === target) {
      count++;
      if (count === 3) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function pair(fiveCardHand) {
  let target = handOfNumbers[0];
  let count = 1;
  for (i = 1; i < handOfNumbers.length; i++) {
    while (handOfNumbers[i] === target) {
      count++;
      if (count === 2) {
        return true;
        break;
      } else {
        return false;
      }
    }
  }

  target = handOfNumbers[1];
  count = 1;

  for (i = 2; i < handOfNumbers.length; i++) {
    while (handOfNumbers[i] === target) {
      count++;
      if (count === 2) {
        return true;
        break;
      } else {
        return false;
      }
    }
  }

  target = handOfNumbers[2];
  count = 1;

  for (i = 3; i < handOfNumbers.length; i++) {
    while (handOfNumbers[i] === target) {
      count++;
      if (count === 2) {
        return true;
        break;
      } else {
        return false;
      }
    }
  }

  target = handOfNumbers[3];
  count = 1;

  for (i = 4; i < handOfNumbers.length; i++) {
    while (handOfNumbers[i] === target) {
      count++;
      if (count === 2) {
        return true;
        break;
      } else {
        return false;
      }
    }
  }
}

function twoPairs(fiveCardHand) {
  fiveCardHand.sort((a, b) => a.value - b.value);
  for (i = 0; i < fiveCardHand.length; i++) {
    if (
      fiveCardHand[i].value === fiveCardHand[i + 1].value &&
      fiveCardHand[i + 2].value === fiveCardHand[i + 3].value
    ) {
      return true;
    } else if (
      fiveCardHand[i + 1].value === fiveCardHand[i + 2].value &&
      fiveCardHand[i + 3].value === fiveCardHand[i + 4].value
    ) {
      return true;
    } else {
      return false;
    }
  }
}

if (royalFlush(fiveCardHand) === true) {
  console.log("You have a Royal Flush!");
} else if (flush(fiveCardHand) === true && straight(fiveCardHand) === true) {
  console.log("You have Straight Flush!");
} else if (fourOfAKind(fiveCardHand) === true) {
  console.log("You have a Four of a Kind!");
} else if (threeOfAKind(fiveCardHand) === true && pair(fiveCardHand) === true) {
  console.log("You have Full House!");
} else if (flush(fiveCardHand) === true && straight(fiveCardHand) === false) {
  console.log("You have a Flush!");
} else if (straight(fiveCardHand) === true && flush(fiveCardHand) === false) {
  console.log("You have a Straight!");
} else if (
  threeOfAKind(fiveCardHand) === true &&
  pair(fiveCardHand) === true &&
  fourOfAKind(fiveCardHand) === false
) {
  console.log("You have a Three of a kind!");
} else if (
  pair(fiveCardHand) === true &&
  twoPairs(fiveCardHand) === true &&
  fourOfAKind(fiveCardHand) === false
) {
  console.log("You have Two Pairs!");
} else if (
  pair(fiveCardHand) === true &&
  threeOfAKind(fiveCardHand) === false
) {
  console.log("You have a Pair!");
} else {
  console.log("You have no hand!");
}
