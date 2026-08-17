const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");


function diffArray(arr1, arr2) {
  
  const filteredArr1 = arr1.filter((elem) => arr2.includes(elem) === false);
  const filteredArr2 = arr2.filter((elem) => arr1.includes(elem) === false);
  const finalArr = filteredArr1.concat(filteredArr2);

  return finalArr;

}