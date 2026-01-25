const email = "freecodecamplab@gmail.com"

function maskEmail(email) {
  let atPosition = email.indexOf("@");
  let username = email.slice(1, atPosition - 1);
  let masking = email.replace(username, "*".repeat(atPosition - 2));
  return masking;
}

console.log(maskEmail(email));

