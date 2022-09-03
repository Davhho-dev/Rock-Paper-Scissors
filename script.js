let playerCount = 0;
let computerCount= 0;
const playerBtn = document.querySelectorAll(".player button");
const playAgain = document.querySelector(".again");

playerBtn.forEach((button) => {
    button.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let playerChoice = convertPlayerSelection(button.classList[0]);
       
        const output = document.querySelector(".output");
        const result = document.querySelector(".results");
        const pScore = document.querySelector(".playerScore span");
        const cScore = document.querySelector(".computerScore span");

        let play = playRound(playerChoice, computerChoice);
        let round = scoreCounter(play);
        let playGame = game(round);
        output.textContent = `You selected: ${button.classList[0]}. Computer selected: ${convertNum(computerChoice)}.`;
        pScore.textContent = round[0];
        cScore.textContent = round[1];
        const winner = document.querySelector(".winner");
        winner.textContent = playGame;
    })
});


//Generates rand num from 1 - 3
//1 = Rock
//2 = Paper
//3 = Scissors
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}
//Plays a round of Rock Paper Scissors
function playRound(playerChoice, computerSelection) {
    if(playerChoice === computerSelection) {
        console.log(`Player: ${playerChoice}. Computer: ${computerSelection}`);
        return "You tied!";
    }else if(playerChoice === 1 && computerSelection == 2) {
        console.log(`Player: ${playerChoice}. Computer: ${computerSelection}`);
        return "You lose! Paper beats Rock.";
    }else if(playerChoice === 1 && computerSelection == 3) {
        console.log(`Player: ${playerChoice}. Computer: ${computerSelection}`);
        return "You win! Rock beats Scissors.";
    }else if(playerChoice === 2 && computerSelection == 3) {
        console.log(`Player: ${playerChoice}. Computer: ${computerSelection}`);
        return "You lose! Scissors beats Paper.";
    }else if(playerChoice === 2 && computerSelection == 1) {
        console.log(`Player: ${playerChoice}. Computer: ${computerSelection}`);
        return "You win! Paper beats Rock.";
    }else if(playerChoice === 3 && computerSelection == 1) {
        console.log(`Player: ${playerChoice}. Computer: ${computerSelection}`);
        return "You lose! Rock beats Scissors";
    }else {
        console.log(`Player: ${playerChoice}. Computer: ${computerSelection}`);
        return "You win! Scissors beats Paper.";
    }
}
//Convert player's selection to a num
function convertPlayerSelection(playerSelection) {
    let lowerCase = playerSelection.toLowerCase();
    if(lowerCase === "rock") return 1;
    else if(lowerCase === "paper") return 2;
    else return 3;
}

function scoreCounter(round) {
    if(round.includes("win")) {
        playerCount++;
    }else if(round.includes("lose")) {
        computerCount++;
    }else {
        playerCount = playerCount;
        computerCount = computerCount;
    }
    return [playerCount, computerCount];
}

//new game function
function game(scoreCounter) {
    let playerScore = scoreCounter[0];
    let computerScore = scoreCounter[1];
    if(playerScore > computerScore && playerScore === 5) return "You win!"
    else if(playerScore < computerScore && computerScore === 5) return "You lose!"
}

//Test function to convert num to string Rock Paper or Scissors
function convertNum(numChoice) {
    if(numChoice === 1) return "Rock"
    else if(numChoice === 2) return "Paper"
    else return "Scissors";
}
