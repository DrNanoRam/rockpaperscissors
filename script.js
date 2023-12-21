// PseudoCode
//Declare variables such as computer input and player input
//Declare variables for score
//Get player input
//Get computer random input
// Create conditions for winner
    // paper beats rock
        // add score to winner
    // scissors beats paper
        // add score to winner
    // rock beats scissors
        // add score to winner
    // Tie, no winner, repeat
// return results and score
// repeat 4 times
// declare winner and reset

// variables
let getComputerChoice = (Math.floor(Math.random() * 3)+1);
let playerSelection = prompt("Rock, Paper, or Scissors?");
console.log(playerSelection);
let computerScore = (0);
let playerScore = (0);

// switch statements convert to capatilized string answers
switch (getComputerChoice) {
    case 1:
        getComputerChoice = 'Rock';
        break;
    case 2:
        getComputerChoice = 'Paper';
        break;
    case 3:
        getComputerChoice = 'Scissors';
        break;
}

switch (playerSelection) {
    case 'rock':
        playerSelection = 'Rock';
    break;
    case 'paper':
        playerSelection = 'Paper';
    break;
    case 'scissors':
        playerSelection = 'Scissors';
    break;
}