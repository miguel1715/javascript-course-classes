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
  const seen = {};
  const repeated = []; 
  if (phraseLength >= words.length) {
    return [];
  }
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    console.log(phrase)
    if (seen[phrase] !== undefined) {
      repeated.push(seen[phrase]);
      repeated.push(i);
    } else {
      seen[phrase] = i;
    }
  }
  return repeated
}

function analyzeTexts(texts, phraseLength) {
  if ( texts.length === 0) {
    return [];
  }
  return texts.map((text) => ({
  repeatedPhrases: findRepeatedPhrases(text, phraseLength),
  palindromeBreaks: findPalindromeBreaks(text)
  }));
}