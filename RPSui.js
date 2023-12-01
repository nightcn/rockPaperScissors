const btnPlay = document.querySelector(".btnPlay");
const mainContainer = document.querySelector(".container");
const gameContainer = document.querySelector("#game-container");
const playerNameTag = document.querySelector(".player-name");

function initGame() {
  if (document.querySelector(".enter-name").value) {
    playerNameTag.textContent = document.querySelector(".enter-name").value;
  } else {
    playerNameTag.textContent = "Player 1";
  }
  document.location.hash = "#game-container";
  mainContainer.style.display = "none";
  gameContainer.style.display = "flex";
}

btnPlay.addEventListener("click", initGame);
