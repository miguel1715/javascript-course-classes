const images = document.querySelectorAll(".gallery-item");
const fullSize = document.querySelector("#lightbox-image");
const lightbox = document.querySelector(".lightbox");
const button = document.querySelector("#close-btn");


images.forEach(image => image.addEventListener("click", (e) => {
  lightbox.style.display = "flex";
  fullSize.src = e.target.src.replace("-thumbnail", "");
} ));

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
})

button.addEventListener("click", () => {
  lightbox.style.display = "none";
})
