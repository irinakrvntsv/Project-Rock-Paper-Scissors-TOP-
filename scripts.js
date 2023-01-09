// function for computer selection
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3) + 1;
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

// prompt players's choice

let playersChoice = '';
  const playerSelection = playersChoice.toLowerCase();
  //one round of the game
  function playRound (playerSelection,computerSelection) {
    
   if (playerSelection === 'rock' && computerSelection === 'paper') {
     return 'You Lose! Paper beats Rock'
   } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
     return 'You Lose! Rock beats Scissors'
   } else if (playerSelection === 'paper' && computerSelection === 'scissors')
   {return 'You Lose! Scissors beats Paper'
   } else if (playerSelection === computerSelection) {
     return ' It\'s a tie!'
   } else {
     return 'You won'
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
 { for (let i = 0; i < 5; i++) {
    let playersChoice = prompt("Rock, Paper or Scissors ?");
    const playerSelection = playersChoice.toLowerCase();
  playRound(playerSelection,computerSelection);
  alert (playRound(playerSelection.toLowerCase(), computerSelection));}
}
 Game();
 if ()
