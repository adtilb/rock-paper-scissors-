const options = ["rock", "paper", "scissor"];

function getComputerChoice() {
  computerChoice = options[Math.floor(Math.random() * options.length)];
  console.log(computerChoice);
  return computerChoice;
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `tie`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return `player`;
  } else {
    return `computer`;
  }
}

function playRound(playerSelection, computerSelection) {
  const result = checkWinner(playerSelection, computerSelection);

  if (result === "tie") {
    return `it's a tie`;
  } else if (result === "player") {
    return `you win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `you lose! ${computerSelection} beats ${playerSelection}`;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
