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

let computerScore = (0);
let playerScore = (0);
let playerSelection = prompt("Rock, Paper, or Scissors?");
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
let computerSelection = getComputerChoice();
// switch statements convert to capatilized string answers
switch (computerSelection) {
    case 0:
        computerSelection = 'Rock';
        break;
    case 1:
        computerSelection = 'Paper';
        break;
    case 2:
        computerSelection = 'Scissors';
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

function playRound (playerSelection, computerSelection) {

//winning choices
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' 
        || playerSelection==='Scissors' && computerSelection==='Paper'
        || playerSelection==='Paper' && computerSelection==='Rock') {
        playerScore =+ 1;
        return (`Player chose ${playerSelection} and computer chose ${computerSelection}. Player Wins! Score is player: ${playerScore} and computer: ${computerScore}`);
    }

//losing choices
    if (playerSelection==='Rock' && computerSelection==='Paper'
        || playerSelection==='Paper' && computerSelection==='Scissors'
        || playerSelection==='Scissors' && computerSelection==='Rock') {
        computerScore =+1;
        return (`Player chose ${playerSelection} and computer chose ${computerSelection}. Player Loses! Score is player: ${playerScore} and computer: ${computerScore}`);
    }

//tie
    if (playerSelection===computerSelection) {
        return (`Both Player and computer chose ${playerSelection}. There is no change in score.`)
    }
}

function game () {
    return playRound(playerSelection, computerSelection);
}
console.log(game(playerSelection,computerSelection));