let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random()*10);
}

function compareGuesses(humanGuess, computerGuess, targetNum) {
  const humanDiff = Math.abs(humanGuess - targetNum);
  const compDiff = Math.abs(computerGuess - targetNum);
  if (humanDiff <= compDiff) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner == 'human') {
    humanScore += 1;
  } else if (winner == 'computer') {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}

function guessHigh() {
  const inputNum = humanGuessInput.value;
  if (inputNum > 9 || inputNum < 0)
    alert(`${inputNum} is too high. Choose 0 - 9`)
}
