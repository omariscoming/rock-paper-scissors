/*
rock = 1
paper = 2
scissors = 3
*/

const numberToString = {
    1: 'rock',
    2: 'paper',
    3: 'scissors'
}

let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3) + 1
    return numberToString[randomChoice]
}

const getHumanChoice = () => {
    const input = prompt('Choose: ROCK / PAPER / SCISSORS ?');
    return input ? input.toLowerCase() : '';
    }

const playRound = (humanChoice, computerChoice) => {

    console.log(`YOURT CHOICE: ${humanChoice}

COMPUTER CHOICE: ${computerChoice}`)


    if (humanChoice === computerChoice) {
        console.log('No One Win! SAME')
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')) {
        console.log("YOU WON!")
        ++humanScore;
    }
    else {
        console.log("COMPUTER WON!")
        ++computerScore;
    }
}

const playGame = () => {

    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();    
        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore) {
        console.log("FINAL WINNER: YOU!")
    } else {
        console.log("FINAL WINNER: COMPUTER!!")
    }
}

playGame()
