const textInput = document.getElementById("text-input")
const checkBtn = document.getElementById("check-btn")
const result = document.getElementById("result")

checkBtn.addEventListener("click", () => {
  const value = textInput.value
  if (value = "") {
    alert("Please input a value")
  }
  result.textContent = value + "is a palindrome"
})