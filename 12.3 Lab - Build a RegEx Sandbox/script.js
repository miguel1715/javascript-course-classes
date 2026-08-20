const regexPattern = document.getElementById("pattern");
const stringToTest = document.getElementById("test-string");
const testButton = document.getElementById("test-btn");
const testResult = document.getElementById("result");
const caseInsensitiveFlag = document.getElementById("i");
const globalFlag = document.getElementById("g");

function getFlags() {
    let flags = "";

    if (caseInsensitiveFlag.checked) {
        flags += "i";
    } if (globalFlag.checked) {
        flags += "g";
    }
    return flags;
}

testButton.addEventListener("click", () => {
    const pattern = regexPattern.value;
    const flagInput = getFlags();
    const customRegex = new RegExp(pattern, flagInput);

    const originalString = stringToTest.textContent;
    const highlighted = originalString.replace(customRegex, "<span class='highlight'>$&</span>");
    stringToTest.innerHTML = highlighted;

    const matches = originalString.match(customRegex);

    if (matches) {
        testResult.textContent = matches.join(", ");
    } else {
        testResult.textContent = "no match";
    }
});