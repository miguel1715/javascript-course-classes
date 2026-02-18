function findLongestWordLength(str) {
  let strArr = str.split(" ");
  let maxLength = 0;

  for (const word of strArr) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
    return maxLength
}