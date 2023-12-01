const btnPlay = document.querySelector(".btnPlay");
const mainContainer = document.querySelector(".container");
const gameContainer = document.querySelector("#game-container");
const playerNameTag = document.querySelector(".player-name");
const playerScore = document.querySelector(".score-player");
const botScore = document.querySelector(".score-bot");
const roundCount = document.querySelector(".round");
const playButtons = document.querySelectorAll(".game-action");

const playerObj = {};
const botObj = { name: "BOT" };
let winner = "";
let round = 0;

function initGame(e) {
  if (document.querySelector(".enter-name").value) {
    playerNameTag.textContent = document.querySelector(".enter-name").value;
  } else {
    playerNameTag.textContent = "Player 1";
  }

  round = 1;
  playerObj.name = playerNameTag.textContent;
  playerObj.score = 0;

  botObj.score = 0;

  roundCount.textContent = round;
  document.location.hash = "#game-container";
  mainContainer.style.display = "none";
  gameContainer.style.display = "flex";
  //   console.log(e.target.classList[1]);
}

function botMove() {
  const arrAction = ["rock", "paper", "scissors"];
  let randomSelection = Math.floor(Math.random() * 3);

  return arrAction[randomSelection];
}

function playMove(e) {
  if (playerScore === 5) {
    winner = playerNameTag.textContent;
  } else if (botScore === 5) {
    winner = bot;
  } else {
    playerObj.action = e.target.classList[1];
    botObj.action = botMove();
    console.log(playerObj, botObj);
    console.log(updateScore(playRound(playerObj, botObj)));
  }
}

function playRound(player1, player2) {
  if (player1["action"] === player2["action"]) {
    return "TIE";
  } else {
    switch (player1["action"]) {
      case "rock":
        if (player2["action"] === "scissors") {
          return player1;
        } else {
          return player2;
        }
      case "paper":
        if (player2["action"] === "rock") {
          return player1;
        } else {
          return player2;
        }
      case "scissors":
        if (player2["action"] === "paper") {
          return player1;
        } else {
          return player2;
        }
    }
  }
}

function updateScore(winner_or_tie) {
  roundCount.textContent++;
  if (winner_or_tie === "TIE") {
    console.log("Tie");
  } else {
    winner_or_tie.score++;
    playerScore.textContent = playerObj.score;
    botScore.textContent = botObj.score;
    return winner_or_tie || "Tie!";
  }
}

btnPlay.addEventListener("click", initGame);
playButtons.forEach(function (action) {
  action.addEventListener("click", playMove);
});
