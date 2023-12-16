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

function playRound(playerSelection, computerSelection) {
  let roundWinner;   //  stores roundWinner of a program

  if((playerSelection==='rock') && (computerSelection === 'rock') ){
        roundWinner = 'tie';
  }
  else if ((playerSelection==='rock') && (computerSelection === 'paper') ){
        roundWinner = 'You lose! Paper beats Rock';
        computerScore++;
  }
  else if ((playerSelection==='rock') && (computerSelection === 'scissor') ){
        roundWinner = 'You Won! Rock beats Scissor';
        playerScore++;
  }
  else if ((playerSelection==='paper') && (computerSelection === 'paper') ){
    roundWinner ='tie';
  }
  else if ((playerSelection==='paper') && (computerSelection === 'rock') ){
    roundWinner = 'You won! Paper beats Rock';
    playerScore++;
  }
  else if ((playerSelection==='paper') && (computerSelection === 'scissor') ){
    roundWinner = 'You Lose! Scissor beats Paper';
    computerScore++;
  }
  else if ((playerSelection==='scissor') && (computerSelection === 'scissor') ){
    roundWinner = 'tie';
  }
  else if ((playerSelection==='scissor') && (computerSelection === 'paper') ){
    roundWinner = 'You Won! Scissor beats Paper';
    playerScore++;
  }
  else if ((playerSelection==='scissor') && (computerSelection === 'rock') ){
   roundWinner = 'You Lose! Rock beats scissor';
   computerScore++;
  }
  // replaying round if roundWinner equals tie
  if(roundWinner === 'tie'){
    console.log('roundWinner Tie \nReplaying Round');
    playRound(getPlayerChoice(),getComputerChoice());
  }
  else
   console.log(roundWinner);
}




