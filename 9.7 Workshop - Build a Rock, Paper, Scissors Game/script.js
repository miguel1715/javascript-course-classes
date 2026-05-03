const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  return (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Scissors" && computerChoice === "Paper") ||
    (playerChoice === "Paper" && computerChoice === "Rock")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (hasPlayerWonTheRound(userOption, computerResult) === true) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`
  } else if (hasPlayerWonTheRound(userOption, computerResult) === false) {
    computerScore++;
    return `"Computer wins! ${computerResult} beats ${userOption}"`
  } else {
    return `It's a tie! Both chose ${userOption}`;
  }
}