const hearts = document.querySelectorAll(".favorite-icon");

hearts.forEach(each => 
  each.addEventListener("click", () => {
    each.classList.toggle("filled")

    if (each.classList.contains("filled")) {
    each.innerHTML = "&#10084;";
  } else {
    each.innerHTML = "&#9825;";
  }
  })
);