/*
Make a function that:
make a variable for the choice;
gets a random number from 1 to 3;
outputs rock if 1, paper if 2, scissors if 3;*/

let win = 0;
let loss = 0;

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
    let comparison = `${computerChoice} and ${playerChoice}`;
    let resultWin = `${comparison}. You win.`;
    let resultDraw = `${comparison}. It's a draw.`;
    let resultLose = `${comparison}. You lose.`;
    if (comparison === "paper and scissors" || comparison === "rock and paper" || comparison === "scissors and rock"){
        win = win + 1;
        return resultWin ;
    }else if (comparison === "scissors and paper" || comparison === "paper and rock" || comparison === "rock and scissors"){
        loss = loss + 1;
        return resultLose;
    }else if (computerChoice === playerChoice){
        return resultDraw;
    }else{
        return("Error");
    }
}

/*
Make a function that:
uses the previous function to play 5 rounds;
report a loser or a winner;
use console.log to display the results of each round;
count the score;

make a variable for wins and losses;
take the result of the playGame function;
if its' a win, add 1 to the win variable;
if it's a loss, add 1 to the win variable;
ignore the draws;
says if you won or lost;
*/



function game(){

    console.log( win );
    console.log( loss );

    console.log( playGame() ) ;
    console.log( playGame() ) ;
    console.log( playGame() ) ;
    console.log( playGame() ) ;
    console.log( playGame() ) ;

   if (win < loss){
      console.log( `Your score is ${win}. You lose.`);
   }else if (win > loss){
    console.log( `Your score is ${loss}. You lose.`);
   }else{
       console.log("It's a draw.");
   }
}