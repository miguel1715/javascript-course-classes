const footballTeam = {
  team:"FC Porto",
  year: 2024,
  headCoach: "Vitor Bruno",
  players: [
    { name: "Diogo Costa", position: "goalkeeper", isCaptain: false },
    { name: "Pepe", position: "defender", isCaptain: true },
    { name: "João Mário", position: "defender", isCaptain: false },
    { name: "Zaidu Sanusi", position: "defender", isCaptain: false },
    { name: "Otávio", position: "midfielder", isCaptain: false },
    { name: "Stephen Eustáquio", position: "midfielder", isCaptain: false },
    { name: "Alan Varela", position: "midfielder", isCaptain: false },
    { name: "Evanilson", position: "forward", isCaptain: false },
    { name: "Galeno", position: "forward", isCaptain: false },
    { name: "Toni Martínez", position: "forward", isCaptain: false },
  ]
}

const teamID = document.getElementById("team");
teamID.textContent = footballTeam.team;

const yearID = document.getElementById("year");
yearID.textContent = footballTeam.year;

const headCoachID = document.getElementById("head-coach");
headCoachID.textContent = footballTeam.headCoach;

const playerCardsID = document.getElementById("player-cards")
playerCardsID.innerHTML = footballTeam.players.map((player) => {
  return `<div class="player-card">
  <h2>${player.isCaptain ? "(Captain) " + player.name : player.name}</h2>
  <p>Position: ${player.position}</p>
  </div>`
}).join("");


const selection = document.getElementById("players");
selection.addEventListener("change", (e) => {
  if (e.target.value === "all") {
    playerCardsID.innerHTML = footballTeam.players.map((player) => {
    return `<div class="player-card">
    <h2>${player.isCaptain ? "(Captain) " + player.name : player.name}</h2>
    <p>Position: ${player.position}</p>
    </div>`
    }).join("");
  } else {
    playerCardsID.innerHTML = footballTeam.players
    .filter((player) => player.position === e.target.value)
    .map((player) => {
      return `<div class="player-card">
      <h2>${player.isCaptain ? "(Captain) " + player.name : player.name}</h2>
      <p>Position: ${player.position}</p>
      </div>`
      })
      .join("");
  }
})