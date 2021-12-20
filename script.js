/*
Make a function that:
make a variable for the choice;
gets a random number from 1 to 3;
outputs rock if 1, paper if 2, scissors if 3;*/

function computerPlay(){
    let computerChoice = Math.floor(Math.random() * 3) + 1;    
    if (computerChoice === 1) {
        return "rock";
    } else if (computerChoice === 2){
        return "paper";
    } else if (computerChoice === 3){
        return "scissors";
    }else{
        return "Something's wrong."
    }

}

/*
Make a function that:
takes an input from the player;
make the input case-insensitive
takes the input from the computer;
compares the two;
output the result, lose,win, or draw;
return, not console.log*/

function playGame(){
    let playerAnswer = prompt("Rock, Paper, or Scissors?");
    let playerChoice = playerAnswer.toLowerCase();
    let computerChoice = computerPlay();
    let comparison = (`${computerChoice} and ${playerChoice}`);
    if (comparison === "paper and scissors"){
        alert("ayo, this works!");
    }else{
        alert("Bruh, you stupid");
    }
}

/*
Make a function that:
uses the previous function to play 5 rounds;
report a loser or a winner;
use console.log to display the results of each round;
*/