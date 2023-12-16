// These two variables will help us in determining winner at the end.
let playerScore = 0,
    computerScore = 0;

function getComputerChoice(){
      
  let randomNumber = Math.floor((Math.random()*3)+1);
  if(randomNumber===1){
    return "rock";
  }
  if(randomNumber===2){
    return "paper";
  }        
  if(randomNumber===3){
    return "scissor";
  }        

}

function getPlayerChoice(){
  let playerChoice = 
  prompt('Select Rock, Paper or Scissor');
  if(playerChoice === null ){
      console.log();
      return getPlayerChoice();
  }   

  switch(playerChoice){
    case 'rock':
    case 'paper':
    case 'scissor':
      return playerChoice;
    default:
      console.log('Invalid Input! Please Select appropriate option');
      return getPlayerChoice();
  }
  
}



