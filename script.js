function getComputerChoice() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}

function getHumanChoice() {
  const choice = prompt(
    "Enter your move (rock, paper, or scissors):",
  ).toLowerCase();
  if (["rock", "paper", "scissors"].includes(choice)) {
    return choice;
  } else {
    alert("Invalid choice. Please try again.");
    return getHumanChoice();
  }
}

function getWinner(playerMove, computerMove) {
  return playerMove === computerMove
    ? "It's a tie!"
    : (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
      ? "You win!"
      : "Computer wins!";
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanMove, computerMove) {
  const result = getWinner(humanMove, computerMove);

  if (result === "You win!") {
    humanScore++;
  } else if (result === "Computer wins!") {
    computerScore++;
  }
  console.log(
    `You chose: ${humanMove}, Computer chose: ${computerMove}. ${result}`,
  );
}

function playGame() {
  let humanMove = "";
  let computerMove = "";

  while (humanScore < 5 && computerScore < 5) {
    humanMove = getHumanChoice();
    computerMove = getComputerChoice();
    playRound(humanMove, computerMove);
  }
  console.log(
    humanScore === 5
      ? "Congratulations! You won the game!"
      : "Game over! The computer won the game.",
  );
}

playGame();

// Tests
// console.log(getWinner("rock", "scissors")); // You win!
// console.log(getWinner("paper", "rock")); // You win!
// console.log(getWinner("scissors", "paper")); // You win!
// console.log(getWinner("rock", "paper")); // Computer wins!
// console.log(getWinner("paper", "scissors")); // Computer wins!
// console.log(getWinner("scissors", "rock")); // Computer wins!
// console.log(getWinner("rock", "rock")); // It's a tie!
// console.log(getWinner("paper", "paper")); // It's a tie!
// console.log(getWinner("scissors", "scissors")); // It's a tie!.
// console.log(getComputerChoice()); // Random move
// console.log(getHumanChoice()); // User input
