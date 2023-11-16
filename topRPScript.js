"use strict";

// Pseudocode

/*

function playerSelection(player = "computer") {
    const arrAction = ['rock', 'paper', 'scissors']
    check if player === "computer"
        create var to pick a random selection (1 - rock, 2 - paper or 3 - scissors)
        return player object {player: player, action: randAction}
    else
        prompt the player for his selection (1 - rock, 2 - paper or 3 - scissors)
        get player name and his selection - lower case its selection
        check his selection against array with the game action values ['rock', 'paper', 'scissors]
        if not match prompt him for selection again (loop)
        return player object {name: player, action: action}
}

function playRound(player1, player2) {
    rock wins scissors
    rock ties rock
    rock loses paper
    
    paper loses scissors
    paper ties papers
    paper wins rock
    
    scissors loses rock
    scissors ties scissors
    scissors wins paper

    if (player1['action'] === player2['action']) {
        return ["It's a tie!", "tie"]
    } else {
        switch (player1["action"]) {
            case "rock":
                if (player2["action"] === "scissors") {
                    return [`player1["name"] wins - player1["action"] beats player2["action"](player2["name"])`, player1["name"]]
                } else {
                    return [`player2["name"] wins - player2["action"] beats player1["action"](player1["name"])`, player2["name"]]
                }
            case "paper":
                if (player2["action"] === "rock") {
                    return [`player1["name"] wins - player1["action"] beats player2["action"](player2["name"])`, player1["name"]]
                } else {
                    return [`player2["name"] wins - player2["action"] beats player1["action"](player1["name"])`, player2["name"]]
                }
            case "scissors":
                if (player2["action"] === "paper") {
                    return [`player1["name"] wins - player1["action"] beats player2["action"](player2["name"])`, player1["name"]]
                } else {
                    return [`player2["name"] wins - player2["action"] beats player1["action"](player1["name"])`, player2["name"]]
                }
        }
    }



}


function game() {
    let rounds = +prompt('How many rounds do you want to play?)


    let score = {};
    let round;

    for (let i = 0; i < rounds; i++) {
        round = playRound(playerSelection("Tsahi"), playerSelection());
        if (round[1] === "tie") {
            continue;
        } else if (!score[`round[1].name`]) {
            score[`${round[1].name}`] = 1;
        } else {
            score[`${round[1].name}`] += 1; 
        }
    }
    console.log(score);
}

 */

/*
function playerSelection(player = "computer") {
    const arrAction = ['rock', 'paper', 'scissors']
    check if player === "computer"
        create var to pick a random selection (1 - rock, 2 - paper or 3 - scissors)
        return player object {player: player, action: randAction}
    else
        prompt the player for his selection (1 - rock, 2 - paper or 3 - scissors)
        get player name and his selection - lower case its selection
        check his selection against array with the game action values ['rock', 'paper', 'scissors]
        if not match prompt him for selection again (loop)
        return player object {name: player, action: action}
}
 */

function playerSelection(player = "bot") {
  let playerObj = {};
  const arrAction = ["rock", "paper", "scissors"];
  let selection;

  if (player === "bot") {
    let randomSelection = Math.floor(Math.random() * 3);
    selection = arrAction[randomSelection];
    playerObj["name"] = player.toUpperCase();
    playerObj["action"] = selection;
  } else {
    playerObj["name"] =
      player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    let playerAction = +prompt(
      `${playerObj["name"]} ,choose your action: 1 - rock, 2 - paper or 3 - scissors `
    );
    selection = arrAction[playerAction];

    playerObj["action"] = selection || "Invalid selection";
  }

  return playerObj;
}

console.log(playerSelection("dErRRew")); // Test call - real player
console.log(playerSelection()); // Test call - random action
