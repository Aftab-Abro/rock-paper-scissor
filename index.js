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




