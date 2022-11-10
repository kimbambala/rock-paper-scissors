let playerScore = 0
let computerScore = 0

const p = document.createElement ("p");
const h2 = document.createElement("h2");
const outcomeDiv = document.querySelector(".outcome")
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")
const playerScoreSpan = document.querySelector(".player-score")
const computerScoreSpan = document.querySelector(".computer-score")

function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"];
  const randomSelection = Math.floor(Math.random() * choices.length);
  const computerPlay = choices[randomSelection];
  return computerPlay
}


function playRound (playerSelection, computerSelection){ 
    if (playerSelection == "rock" && computerSelection == "paper") {
      computerScore++
      p.innerText= "You Lose! Paper beats Rock";
      outcomeDiv.appendChild(p);
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
      computerScore++
        p.innerText= "You Lose! Scissors beasts Paper"
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
      computerScore++
        p.innerText= "You Lose! Rock beasts Scissors"
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        p.innerText= "You Tied! You both picked Scissors"
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "rock" && computerSelection == "rock"){
        p.innerText= "You Tied! You both picked Rock"
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        p.innerText= "You Tied! You both picked Paper"
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
      playerScore++
        p.innerText= "You Won! Scissors beasts Paper"
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      playerScore++
        p.innerText= "You Won! Paper beats Rock"
        outcomeDiv.appendChild(p)
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
      playerScore++
        p.innerText= "You Won! Rock beasts Scissors"
        outcomeDiv.appendChild(p)
    } 
}

function checkForWinner(playerScore, computerScore) {
  if (playerScore === 5){
    h2.classList.add("player-won")
    h2.innerText = "You beat the computer. This is fantastic. Good job!"
    outcomeDiv.appendChild(h2)
  }
  if (computerScore === 5) {
    h2.classList.add("computer-won")
    h2.innerText = "You lost againt the computer. Practice more and good luck next time"
    outcomeDiv.appendChild(h2)
  }
}

function updateScores(playerScore, computerScore) {
  playerScoreSpan.innerText = `Player Score:  ${playerScore}`
  computerScoreSpan.innerText = `COmputer Score: ${computerScore}`

  
}



    rockButton.addEventListener("click", ()=>{
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    checkForWinner (playerScore, computerScore);
    updateScores (playerScore, computerScore);
  })

    paperButton.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    checkForWinner (playerScore, computerScore);
    updateScores (playerScore, computerScore);
  })
    scissorsButton.addEventListener("click", () =>{
    const computerSelection = getComputerChoice();
    const playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    checkForWinner (playerScore, computerScore);
    updateScores (playerScore, computerScore);
  })




 
  
