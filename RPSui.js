const btnPlay = document.querySelector(".btnPlay");
const mainContainer = document.querySelector(".container");
const gameContainer = document.querySelector("#game-container");
const playerNameTag = document.querySelector(".player-name");
const playerScore = document.querySelector(".score-player");
const botScore = document.querySelector(".score-bot");
const roundCount = document.querySelector(".round");
const playButtons = document.querySelectorAll(".game-action");
const btnNewRound = document.querySelector(".next-round");

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

  btnNewRound.disabled = true;
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
  } else if (
    window.getComputedStyle(e.target).getPropertyValue("width") !== "90px"
  ) {
    newRound();
  } else {
    highlightPick(e.target);
    playerObj.action = e.target.classList[1];
    botObj.action = botMove();
    highlightPick(document.querySelector(".btnBot"), botObj.action);
    console.log(playerObj, botObj);
    console.log(
      updateScore(
        playRound(playerObj, botObj),
        e.target,
        document.querySelector(".btnBot")
      )
    );
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

function updateScore(winner_or_tie, playerEl, botEl) {
  roundCount.textContent++;
  btnNewRound.disabled = false;
  if (winner_or_tie === "TIE") {
    playerEl.textContent = "TIE";
    botEl.textContent = "TIE";
    console.log("Tie");
  } else {
    winner_or_tie.score++;
    if (winner_or_tie.name === "BOT") {
      setTimeout(function () {
        playerEl.textContent = "LOSER";
        botEl.textContent = "WINNER";
      }, 3500);
    } else {
      setTimeout(function () {
        playerEl.textContent = "WINNER";
        botEl.textContent = "LOSER";
      }, 3500);
    }
    playerScore.textContent = playerObj.score;
    botScore.textContent = botObj.score;
    return winner_or_tie || "Tie!";
  }
}

function highlightPick(element, actionPick) {
  if (element.classList.contains("btnBot")) {
    element.style.width = "100%";
    element.style.fontSize = "3rem";
    element.textContent = actionPick[0].toUpperCase() + actionPick.slice(1);
  } else if (element.parentElement.classList.contains("player")) {
    for (const gameAction of element.parentElement.children) {
      if (gameAction !== element) {
        gameAction.style.display = "none";
      }
    }
    element.style.width = "100%";
    element.style.fontSize = "3rem";
  }
  let intervalID = setInterval(function () {
    element.classList.toggle("highlight");
  }, 500);
  setTimeout(function () {
    clearInterval(intervalID);
  }, 3001);
}

function newRound() {
  if (roundCount.textContent > 1) {
    btnNewRound.disabled = !btnNewRound.disabled;
    document.querySelectorAll(".game-action").forEach(function (e) {
      if (e.classList.contains("btnBot")) {
        e.textContent = "Waiting...";
        e.style.fontSize = "1rem";
        e.style.width = "90px";
        e.classList.remove("highlight");
      } else {
        e.style.width = "90px";
        e.style.display = "block";
        e.style.fontSize = "1rem";
        e.classList.remove("highlight");
        e.textContent =
          e.classList[1].slice(0, 1).toUpperCase() + e.classList[1].slice(1);
      }
    });
  }
}

btnPlay.addEventListener("click", initGame);
playButtons.forEach(function (action) {
  action.addEventListener("click", playMove);
});
btnNewRound.addEventListener("click", newRound);
