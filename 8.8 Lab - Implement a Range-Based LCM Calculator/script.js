/*
Implement a Range-Based LCM Calculator
In this lab, you will create a function that takes an array of two numbers and returns the least common multiple (LCM) of those two numbers and all the numbers between them.

Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

User Stories

You should have a smallestCommons function that accepts an array of two numbers as an argument.
The smallestCommons function should return the smallest common multiple that is evenly divisible by both numbers and all sequential numbers in the range between them.
The function should handle input where the two numbers are not in numerical order.
*/

// Euclidean algorithm - finds the largest number that divides both a and b evenly
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b; // remainder shrinks until 0, revealing the GCD
    a = temp;
  }
  return a;
}

// LCM(a,b) = (a * b) / GCD(a,b) - smallest number both a and b divide into evenly
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort((a, b) => a - b);
  let num1 = arr[0];
  let num2 = arr[1];
  let newArr = [];

  // build range array from min to max
  for (let i = num1; i <= num2; i++) {
    newArr.push(i);
  }

  // chain LCM across entire range to find one final LCM
  return newArr.reduce(lcm);
}