let playerScore = 0
let computerScore = 0

/*Your game is going to play against the computer, so begin with a function 
called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. Tip: use the console 
to make sure this is returning the expected output before moving to the next step! */

function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"];
  const randomSelection = Math.floor(Math.random() * choices.length);
  const computerPlay = choices[randomSelection];
  return computerPlay
}

/*Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - and then 
return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
 *Make your function’s playerSelection parameter case-insensitive (so users 
  can input rock, ROCK, RocK or any other variation 
 Important note: you want to return the results of this function call, not console.log() them. 
 You’re going to use what you return later on, so let’s test this function by using console.log 
 to see the results: 
*/


function playRound (playerSelection, computerSelection){ 
    if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++
      return ("You Lose! Paper beats Rock");
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
      computerScore++
      return ("You Lose! Scissors beasts Paper")
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
      computerScore++
      return ("You Lose! Rock beasts Scissors")
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
      return ("You Tied! You both picked Scissors")
    } else if (playerSelection == "rock" && computerSelection == "rock"){
      return ("You Tied! You both picked Rock")
    } else if (playerSelection == "paper" && computerSelection == "paper"){
      return ("You Tied! You both picked Paper")
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
      playerScore++
      return ("You Won! Scissors beasts Paper")
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore++
      return ("You Won! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
      playerScore++
      return ("You Won! Rock beasts Scissors")
    } 
}


/*Write a NEW function called game(). Call the playRound function inside of this one to 
play a 5 round game that keeps score and reports a winner or loser at the end.*/

function game (){
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Make your choice: Rock, Paper or Scissors?").toLocaleLowerCase();
  console.log(playRound(playerSelection, computerSelection));
  }

  if (playerScore > computerScore) {
    console.log("You beat the computer. This is fantastic. Good job!");
  } else if (playerScore < computerScore){
    console.log("You lost againt the computer. Practice more and good luck next time");
  }else{
    console.log("You both tied. Not too bad. Try again, you should do better");
  }
  
}
game();