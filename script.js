// Rock-Paper-Scissors Game Logic
// Author: [Xirlorm](https://github.com/Xirlorm)
// This script implements the game logic for a simple Rock-Paper-Scissors game.
// The game continues until either the player or the computer reaches 5 wins.
// The player's move is determined by button clicks, while the computer's move is generated randomly.
// The game displays the result of each round and updates the scores accordingly.

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Computer's random move generator
const getComputerChoice = () =>
  ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

// Player's move input
function getWinner(playerMove, computerMove) {
  return playerMove === computerMove
    ? "It's a tie!"
    : (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
      ? "You win!"
      : "Computer wins!";
}

// Play a single round and update scores
function playRound(humanMove, computerMove) {
  const result = getWinner(humanMove, computerMove);
  const resultElement = document.querySelector("#result");
  const playerScoreElement = document.querySelector("#player-score .score");
  const computerScoreElement = document.querySelector("#computer-score .score");
  if (result === "You win!") {
    humanScore++;
  } else if (result === "Computer wins!") {
    computerScore++;
  }
  resultElement.textContent = `You chose ${humanMove}, computer chose ${computerMove}. ${result}`;
  playerScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;

  // Check for game over
  if (humanScore === 5 || computerScore === 5) {
    const winner =
      humanScore === 5 ? "You win the game!" : "Computer wins the game!";
    resultElement.textContent += ` ${winner} Click any move to play again.`;
    // Reset scores for a new game
    humanScore = 0;
    computerScore = 0;
    resultElement.style.backgroundColor = "#333"; // Reset background color
    resultElement.style.color = "#fff"; // Reset text color
    resultElement.style.borderRadius = "6px"; // Add border radius for better aesthetics
  } else {
    resultElement.style.backgroundColor = "transparent"; // Reset background color for ongoing game
    resultElement.style.color = "#333"; // Reset text color for ongoing game
    resultElement.style.borderRadius = "0"; // Reset border radius for ongoing game
  }
}

// Event listener for player's move selection
document.querySelector("#gameboard").addEventListener(
  "click",
  (event) => {
    switch (event.target.id || event.target.alt.toLowerCase()) {
      case "rock":
        playRound("rock", getComputerChoice());
        break;
      case "paper":
        playRound("paper", getComputerChoice());
        break;
      case "scissors":
        playRound("scissors", getComputerChoice());
        break;
    }
  },
  false,
);
