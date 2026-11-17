function sanitizeLog(entry, disallowedCharacters) {
  let finalPhrase = "";
  
  for (const letter of entry) {
    if (disallowedCharacters.includes(letter)) {
      finalPhrase += "#";
    } else {
      finalPhrase += letter;
    }
  }
  return finalPhrase;
}

function cleanLogs(logs, disallowedCharacters) {
  let totalEntryCount = 0;
  let informationalEntries = 0;
  let sanitizedEntries = 0;

  for (const phrase of logs) {
    totalEntryCount++;

    if (phrase.includes("$")) {
      return "Sanitizing stopped. Failure Reason: Fatal character occurred.";
    } else if (phrase.startsWith("/")) {
        informationalEntries++;
    } else {
      sanitizeLog(phrase, disallowedCharacters);
      sanitizedEntries++
    }
  }
  return `Total Entry Count: ${totalEntryCount}. Sanitized Entry Count: ${sanitizedEntries}. Informational Entry Count: ${informationalEntries}. Finished sanitizing logs.`
}