let playerChoice = 0;
let playerCount = 0;
let computerCount= 0;
const playerBtn = document.querySelectorAll(".player button");

playerBtn.forEach((button) => {
    button.addEventListener("click", () => {
        const output = document.querySelector(".output");
        const result = document.querySelector(".results");
        const pScore = document.querySelector(".playerScore span");
        const cScore = document.querySelector(".computerScore span");
        let computerChoice = getComputerChoice();
        playerChoice = convertPlayerSelection(button.classList[0]);
        let round = scoreCounter((playRound(playerChoice, computerChoice)));
        output.textContent = `You selected: ${button.classList[0]}. Computer selected: ${convertNum(computerChoice)}.`;
        result.textContent = round;
        pScore.textContent = round[0];
        cScore.textContent = round[1];
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

//Play a game until first winner to 5
function game(playerSelection, computerSelection) {
    let playerCount = 0;
    let computerCount = 0;
    for(let i = 0; i < 20; i++) {
        let playerConvert = convertNum(playerSelection);
        let computerConvert = convertNum(computerSelection);å
        let round = playRound(playerSelection, computerSelection);
        if(round.includes("win")) {
            playerCount++;
            console.log(`Player choses: ${playerConvert}. Computer chose: ${computerConvert}.`);
            console.log(`Player count: ${playerCount}. Computer count: ${computerCount}`);
        }else if(round.includes("lose")){
            computerCount++;
            console.log(`Player choses: ${playerConvert}. Computer chose: ${computerConvert}.`);
            console.log(`Player count: ${playerCount}. Computer count: ${computerCount}`);
        }else {
            console.log(`Player choses: ${playerConvert}. Computer chose: ${computerConvert}.`);
            console.log(`Player count: ${playerCount}. Computer count: ${computerCount}`);
        }
        //break loop until first winner to 5
        if(playerCount === 5 || computerCount === 5) break;
    }
  return checkWinner(playerCount, computerCount);
}


//Helper function to check winner
function checkWinner(playerCount, computerCount) {
    if(playerCount > computerCount) {
        return `You win! Player Score: ${playerCount}. Computer Score: ${computerCount}.`
    }else if(playerCount < computerCount){
        return `You lose! Player Score: ${playerCount}. Computer Score: ${computerCount}.`
    }else {
        return `You tied! Player Score: ${playerCount}. Computer Score: ${computerCount}.`
    }
}

//Test function to convert num to string Rock Paper or Scissors
function convertNum(numChoice) {
    if(numChoice === 1) return "Rock"
    else if(numChoice === 2) return "Paper"
    else return "Scissors";
}


/*Testing Code Section
const playerSelection = "ROCK";
const computerSelection = getComputerChoice();
console.log("1 = Rock \n2 = Paper \n3 = Scissors");
console.log(game());
*/