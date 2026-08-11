const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    if (textInput.value === "") {
        alert("Please input a value")
        return
    }
    const cleaned = textInput.value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = cleaned.split("").reverse().join("");

    if (cleaned === reversed) {
        result.textContent = `${textInput.value} is a palindrome`
        result.className = "";
        result.classList.add("palindrome");
    } else {
        result.textContent = `${textInput.value} is not a palindrome`
        result.className = "";
        result.classList.add("not-palindrome");
    }
    return
})