    const textBox = document.getElementById("text-input");
    const counterText = document.getElementById("char-count");
    const count = document.getElementById("live-count");

    textBox.addEventListener("input", () => {
      if (textBox.value.length >= 50) { 
      counterText.classList.add("red-counter") 
      textBox.value = textBox.value.slice(0, 50);
      } else {
        counterText.classList.remove("red-counter");
      }
      count.textContent = textBox.value.length;
    })