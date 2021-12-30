"use Strict";
let score = 20;

let number = Math.floor(Math.random() * 20 + 1);

let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // var message = document.querySelector(".message").textContent;
  if (!guess) {
    document.querySelector(".message").textContent = "Please enter a number";
  }

  //when you win the game
  else if (guess === number) {
    document.querySelector(".message").textContent = "You guessed it!";
    score++;
    document.querySelector(".score").textContent = score;
    //show number when won instead of ? mark
    document.querySelector(".number").textContent = number;
    //style when won
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";

    //high score checker
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    //when guess is high
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
  //when guess is low
  else if (guess < number) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over";
      score = 0;
      document.querySelector(".score").textContent = score;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "";
});
