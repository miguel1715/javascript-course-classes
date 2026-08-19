const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
     let result = 0;
  if (n > m) {
    for (let i = n; i >= m; i--) {
      result += i;
    }
  } else {
    for (let i = n; i <= m; i++){
      result += i;
    }
  }
  return result;
}