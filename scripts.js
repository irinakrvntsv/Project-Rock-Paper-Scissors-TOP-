let userPoints = 0;
let computerPoints = 0;
// function for computer selection
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
    case 3:
      return 'scissors';
  }
}
// one round of the game
//let playerSelection = prompt('Rock, paper or scissors?')
function playRound(computerSelection, playerSelection) {
  if (computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors') {
    return 'computer'//,console.log('You lose, rock beast scissors');
    
  } else if (computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock') {
    return 'computer'//, console.log('You lose, paper beast rock')
  } else if (computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper') {
    return 'computer'//,console.log('You lose, scissors beast paper')
  } else if (computerSelection === playerSelection) {
    return 'tie'//, console.log('It\'s a tie')
  } else {
    return 'user'//,console.log('You win!');
  }
}

//console.log(playRound(computerSelection, playerSelection));
// game function
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock, paper or scissors?')
    let computerSelection = getComputerChoice()

    const result = playRound(computerSelection, playerSelection);
    if (result === 'computer') {
      computerPoints += 1;
    } else if (result === 'user') {
      userPoints +=1;
     
    }
  }
  if (userPoints < computerPoints ) {
    console.log(`User: ${userPoints}, Computer: ${computerPoints}, Computer wins!`)
  } else if (computerPoints<userPoints) {
    console.log(`User: ${userPoints}, Computer: ${computerPoints}, User wins!`)
  } else {
    console.log(`User: ${userPoints}, Computer: ${computerPoints}, it's a tie!`)
  }
}


game();
//console.log(game())
// prompt players's choice

/*let playersChoice = '';
  const playerSelection = playersChoice.toLowerCase();
  //one round of the game
  let result = 'You won!'
  function playRound (playerSelection,computerSelection) {

   if (playerSelection === 'rock' && getComputerChoice () === 'paper') {
     return 'You Lose! Paper beats Rock'
   } else if (playerSelection === 'scissors' && getComputerChoice () === 'rock') {
     return 'You Lose! Rock beats Scissors'
   } else if (playerSelection === 'paper' && getComputerChoice () === 'scissors')
   {return 'You Lose! Scissors beats Paper'
   } else if (playerSelection === getComputerChoice ()) {
     return ' It\'s a tie!'
   } else {
     return result;
   }
   
  }
  //results of a round
  //const playerSelection = playersChoice.toLowerCase();
  console.log(`Player's choice : ${playerSelection}`)
  const computerSelection = getComputerChoice();
  console.log(`Computer's choice: ${computerSelection}`)
  console.log(playRound(playerSelection.toLowerCase(), computerSelection));
  //whole game

 function Game() 
 { 	  
 let roundResult ='';
 let playerPoints = 0;
 let computerPoints = 0;
 for (let i = 0; i < 5; i++) {
    let playersChoice = prompt("Rock, Paper or Scissors ?");
    const playerSelection = playersChoice.toLowerCase();
  playRound(playerSelection,computerSelection);
  alert (playRound(playerSelection.toLowerCase(), computerSelection));
  if(playRound().includes(result)){
    playerPoints+= 1  ;
} else if (playRound().includes(' It\'s a tie!')){
computerPoints += 0;
} else {
 computerPoints += 1; 
}
alert(roundResult + " The score is: " + playerPoints + " to " + computerPoints);
}

        }
 Game()*/
