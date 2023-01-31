// const prompt = require('prompt-sync')();

// let player1 = prompt("Player 1, enter 'rock', 'paper', or 'scissors': ")
// let player2 = prompt("Player 2, enter 'rock', 'paper', or 'scissors': ")

// if (player1 === 'rock' && player2 === 'scissors' ||
//     player1 === 'scissors' && player2 === 'paper' ||
//     player1 === 'paper' && player2 === 'rock') {
//         console.log("Player 1 wins!");
//     } else if (player2 === 'rock' && player1 === 'scissors' ||
//     player2 === 'scissors' && player1 === 'paper' ||
//     player2 === 'paper' && player1 === 'rock') {
//         console.log("Player 2 wins!")
//     } else if (player1 === player2) {
//         console.log("Draw...")
//     } else {
//         console.log ("Invalid input. Please enter 'rock', 'paper', or  'scissors'.")
//     }

const prompt = require("prompt-sync")({sigint: true})

let p1 = prompt('Player 1, enter "rock", "paper", or "scissors": ')
let p2 = prompt('Player 2, enter "rock", "paper", or "scissors": ')

let rock = "rock"
let paper = "paper"
let scissors = "scissors"

if(p1 === rock && p2 === rock) {
    console.log("Draw!")
}   else if (p1 === rock && p2 === paper) {
    console.log("Player 2 wins!")
}   else if (p1 === rock && p2 === scissors){
    console.log("Player 1 winds!")
}   else if (p1 === paper && p2 === paper) {
    console.log("Draw!")
}   else if (p1 === paper && p2 === scissors) {
    console.log("Player 2 wins!")
}   else if (p1 === paper && p2 === rock) {
    console.log("Player 1 wins!")
}   else if (p1 === scissors && p2 === scissors) {
    console.log("Draw!")
}   else if (p1 === scissors && p2 === paper) {
    console.log("Player 1 wins!")
}   else if (p1 === scissors && p2 === rock) {
    console.log("Player 2 wins!")
}   else {
    console.log("Error, try agian!")
}