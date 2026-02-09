const questions = [
  {
    category: "Geography",
    question: "What is the capital of Portugal?",
    choices: ["Porto", "Lisbon", "Faro"],
    answer: "Lisbon"
  },
  {
    category: "Science",
    question: "What planet is closest to the Sun?",
    choices: ["Venus", "Mercury", "Mars"],
    answer: "Mercury"
  },
  {
    category: "Programming",
    question: "What does HTML stand for?",
    choices: ["Hyperlink Text Markup Language", "HyperText Markup Language", "Home Tool Markup Language"],
    answer: "HyperText Markup Language"
  },
  {
    category: "Math",
    question: "What is 7 x 8?",
    choices: ["54", "56", "64"],
    answer: "56"
  },
  {
    category: "History",
    question: "In what year did World War II end?",
    choices: ["1943", "1945", "1947"],
    answer: "1945"
  }
]

function getRandomQuestion(arr) {
  let getRandom = Math.floor(Math.random() * arr.length);
  return arr[getRandom]
}

function getRandomComputerChoice(choicesArr) {
  let randomChoice = Math.floor(Math.random() * choicesArr.length);
  return choicesArr[randomChoice]
}

function getResults(mainQuestion, pcChoice) {
  if (pcChoice === mainQuestion.answer) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${mainQuestion.answer}`
  }
}