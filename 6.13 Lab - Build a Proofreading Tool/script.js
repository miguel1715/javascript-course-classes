function isPalindrome(word) {
  const normalized = word.toLowerCase();
  const reversed = word.toLowerCase().split("").reverse().join("");

  return normalized === reversed;
}

function findPalindromeBreaks(words) {
  let breaks = [];
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i)
    }
  }
  return breaks
}

function findRepeatedPhrases(words, phraseLength) {
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    console.log(phrase)
  }
}