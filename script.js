"use strict";

// create a random number between 1 an d 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// create a score var
let score = 20;

// create highscore var
let highscore = 0;

// check if the user put a number or not
// all that be happen when the user hit the buttion with class check
document.querySelector(".check").addEventListener("click", function () {
  // bring the inputed value of user from the input field
  const guess = Number(document.querySelector(".guess").value);

  // first check if the user put empty values
  if (!guess) {
    document.querySelector(".message").textContent = "No Number";
  } else if (guess === secretNumber) {
    // correct number
    document.querySelector(".message").textContent = "Correct Number";
    // print out the choosen number
    document.querySelector(".number").textContent = secretNumber;
    // change the body background
    document.querySelector("body").style.background =
      "linear-gradient(90deg, #38ef7d, #11998e)";
    // change the width of .number to 30rem
    document.querySelector(".number").style.width = "30rem";

    // set the high score
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
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
    // if guessed number to low
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you lose the game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "start guessing ...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background =
    "linear-gradient(90deg, #222, #333)";
  // change the width of .number to 30rem
  document.querySelector(".number").style.width = "15rem";
});
