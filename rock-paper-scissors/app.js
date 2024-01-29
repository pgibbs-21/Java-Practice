let userInputElement = document.getElementById("user-choice");
let lockItInButton = document.querySelector("button");
let result = document.getElementById("result");

function checkUserInput() {
  let inputValue = userInputElement.value.toLowerCase();
  if (
    inputValue === "rock" ||
    inputValue === "paper" ||
    inputValue === "scissors" ||
    inputValue === "bomb"
  ) {
    return inputValue;
  } else {
    result.innerText = "Please only enter rock, paper, or scissors";
    return null;
  }
}

function computerDetermination() {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) return "rock";
  else if (randomNumber === 1) return "paper";
  else if (randomNumber === 2) return "scissors";
}

function determineWinner(computerChoiceValue, userInputValue) {
  if (userInputValue === "bomb") {
    return "You're the Bombdiggity and you WON!";
  }
  if (computerChoiceValue === userInputValue) {
    return "Y'all tied";
  }
  if (userInputValue === "rock" && computerChoiceValue === "paper") {
    return "The Computer Won!";
  } else if (userInputValue === "paper" && computerChoiceValue === "scissors") {
    return "The Computer Won!";
  } else if (userInputValue === "scissors" && computerChoiceValue === "rock") {
    return "The Computer Won!";
  } else {
    return "You Fuckin' Won!";
  }
}

lockItInButton.addEventListener("click", push);
function push() {
  let userInputValue = checkUserInput();

  if (userInputValue !== null) {
    let computerChoiceValue = computerDetermination();
    let winner = determineWinner(computerChoiceValue, userInputValue);
    result.innerText = `Your choice: ${userInputValue}\nComputer's Choice: ${computerChoiceValue}\nResult: ${winner}`;
  }
}
