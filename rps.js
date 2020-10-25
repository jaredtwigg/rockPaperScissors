let playerScore = 0;
let computerScore = 0;


function game(){
    for(i = 0; i < 5; i++) {
        const playerSelection = playerPlay();
        const computerSelection = computerPlay();

        console.log(playRound(playerSelection, computerSelection));
        console.log('player score: ', playerScore);
        console.log('computer score: ', computerScore);
    }

    alert(`Final Scores \nPlayer: ${ playerScore } \nComputer: ${ computerScore }`);
}


function computerPlay(){
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    return computerChoice;
}

// Need to add check for correct input (rock, paper, or scissors) in playerPlay() function. 
function playerPlay(){
    let playerChoice = prompt('Choose your weapon: ');
    let caseCorrection = playerChoice.toLowerCase();

    return caseCorrection;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection)
          return 'Draw!';
          
	switch (playerSelection + " " + computerSelection) {
		case 'rock scissors' || 'scissors paper' || 'paper rock':
            playerScore++
            return `You win! Your ${ playerSelection.toUpperCase() } beats their ${ computerSelection.toUpperCase() }.`;
			break;
		default:
            computerScore++
            return `You lose. Their ${ computerSelection.toUpperCase() } beats your ${ playerSelection.toUpperCase() }.`;
			break;
	}
}