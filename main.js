


function getComputerChoice(){
  const choices = ["Rock", "Paper", "Scissors"];
  const randomSelection = Math.floor(Math.random() * choices.length);
  console.log(choices[randomSelection]);

}
getComputerChoice();