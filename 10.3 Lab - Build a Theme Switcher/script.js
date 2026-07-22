const themes = [
  {
    name: "Dark",
    message: "Enjoy, Night Owl!"
  },
  {
    name: "Light",
    message: "Follow me to the light!"
  }
]

const buttonGrab = document.getElementById("theme-switcher-button");
const listGrab = document.querySelector("#theme-dropdown");

buttonGrab.addEventListener("click", () => {
  listGrab.hidden = !listGrab.hidden
  buttonGrab.setAttribute("aria-expanded", !listGrab.hidden);
})

const itemsGrab = document.querySelectorAll('[role="menuitem"]');

