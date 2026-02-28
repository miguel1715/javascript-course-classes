/* Build a Gradebook App
Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.

You should have a function named getGrade that takes a student score as a parameter and returns a string representing a letter grade based on the score. Here are the scores and their corresponding letter grades:

Score Range	Grade
100	"A+"
90 - 99	"A"
80 - 89	"B"
70 - 79	"C"
60 - 69	"D"
0 - 59	"F"
You should have a function named hasPassingGrade that takes a score as a parameter and returns either true or false depending on if the score corresponds to a passing grade.

The hasPassingGrade function should use the getGrade function to get the letter grade, and use it to determine if the grade is passing. A passing grade is anything different from "F".

You should have a function named studentMsg that takes an array of scores and a student score as the parameters. The function should return a string with the format:

"Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
"Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade.
*/


function getAverage(arr) { // Calculates the average of the arr
  let sum = 0;
  
  for (const numb of arr) {
    sum += numb;
  }
  return sum / arr.length
} 

function getGrade(score) { // Assigns a letter to a range of numbers as a grade
  if ( score >= 0 && score <= 59) {
    return "F"
  } else if (score >= 60 && score <= 69) {
    return "D"
  } else if (score >= 70 && score <= 79) {
    return "C"
  } else if (score >= 80 && score <= 89) {
    return "B"
  } else if (score >= 90 && score <= 99) {
    return "A"
  } else if (score === 100) {
    return "A+"
  }
}

function hasPassingGrade(score) { // Boolean for failing/passing grade
  return getGrade(score) !== "F" // this returns the boolean immediately
}

function studentMsg(arr, score) { // Final message
  if (hasPassingGrade(score) === false) {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You failed the course.`
  } else {
    return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You passed the course.`
  }
}  