function confirmEnding(string1, string2) {
  let s1 = string2.length; 
  let s2 = string1.length - s1; 
  let s3 = string1.slice(s2)

  if (s3 === string2) {
    return true
  } else {
    return false
  }
}