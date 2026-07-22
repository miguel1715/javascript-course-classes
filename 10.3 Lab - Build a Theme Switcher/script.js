const themes = [
  {
    name: "dark",
    message: "Enjoy, Night Owl!"
  },
  {
    name: "light",
    message: "The Force is strong in the light side!"
  }
]

const buttonGrab = document.getElementById("theme-switcher-button");
const listGrab = document.querySelector("#theme-dropdown");

buttonGrab.addEventListener("click", () => {
  listGrab.hidden = !listGrab.hidden
  buttonGrab.setAttribute("aria-expanded", !listGrab.hidden);
})

const itemsGrab = document.querySelectorAll('[role="menuitem"]');
const pGrab = document.getElementById("status");


itemsGrab.forEach((x) => {
    x.addEventListener("click", (e) => {
      listGrab.hidden = !listGrab.hidden;
      buttonGrab.setAttribute("aria-expanded", !listGrab.hidden);
      document.body.className = "";
      document.body.classList.add(e.target.id);
      const selectedTheme = themes.find((theme) => theme.name === e.target.textContent);
      pGrab.textContent = selectedTheme.message;
  })
})