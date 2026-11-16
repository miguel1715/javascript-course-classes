function sanitizeLog(entry, disallowedCharacters) {
  let result = "";
  for (const char of entry) {
    if (disallowedCharacters.includes(char)) {
      result += "#";
    } else {
      result += char;
    }
  }
  return result;
}

function cleanLogs(logs, disallowedCharacters) {
  for (let i = 0; i < logs.length; i++) {
    const entry = logs[i];

  }
}