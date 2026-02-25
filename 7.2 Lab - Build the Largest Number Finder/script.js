/*Build the Largest Number Finder
In this lab, you will build a function that returns an array consisting of the largest number from each provided sub-array.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories:

You should create a function largestOfAll that takes an array of arrays as an argument.
The function should return an array containing the largest number from each sub-array.*/


function largestOfAll(arr) {
  let result = [];

  for(const subArray of arr) {
    let max = subArray[0];

    for (let i = 1; i < subArray.length; i++) {
      if (subArray[i] > max) {
        max = subArray[i];
      }
    }
    result.push(max)
  }
  return result;
}


// 2nd possible solution

function largestOfAll(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    const subArray = arr[i];
    let max = subArray[0];

    for (let j = 1; j < subArray.length; j++) {
      if (subArray[j] > max) {
        max = subArray[j]
      }
    }
  result.push(max)
  }
  return result;
}


