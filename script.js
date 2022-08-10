"use strict";

// create a random number between 1 an d 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// create a score var
let score = 20;

document.querySelector(".number").textContent = secretNumber;

// check if the user put a number or not
// all that be happen when the user hit the buttion with class check
document.querySelector(".check").addEventListener("click", function () {
  // bring the inputed value of user from the input field
  const guess = Number(document.querySelector(".guess").value);

  // first check if the user put empty values
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Number";
  } else if (guess > secretNumber) {
    // check if the score is greater the zero
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      // decrease the score
      score--;
      // implement the new score the html
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you loose the game";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lose the game";
    }
  }
});
