
const questions = [
  {
    category: "Movies",
    question: "Who is the actor who play the main role in the Mission Impossible movies?",
    choices: ["Leonardo DiCaprio", "Tom Cruise", "Dwayne Johnson"],
    answer: "Tom Cruise"
  },
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "What is the capital city of Japan?",
    choices: ["Kyoto", "Tokyo", "Osaka"],
    answer: "Tokyo"
  },
  {
    category: "Sports",
    question: "How many players are on a standard football team on the field?",
    choices: ["9", "11", "13"],
    answer: "11"
  },
  {
    category: "History",
    question: "In which year did World War II end?",
    choices: ["1943", "1945", "1947"],
    answer: "1945"
  }
];



function getRandomQuestion(questions) {
  let randomInt = Math.floor(Math.random() * questions.length);
  return questions[randomInt]
}

function getRandomComputerChoice(choices) {
  let randomAnswer = Math.floor(Math.random() * choices.length);
  return choices[randomAnswer]
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}

