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
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        return 'No One Win! SAME'
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        ++humanScore;
        return "YOU WON!"
    }
    else {
        ++computerScore;
        return "COMPUTER WON!"
    }
}


let clickDisabled = false;
let restClickDisabled = false;
let i = 1;
async function logScreenText() {
    console.log(i)
    if (clickDisabled) return;
    clickDisabled = true;
    restClickDisabled = true;

    // Play one round
    const userChoose = this.className.split(' ')[1];
    screen.innerHTML = `<p class="screen-text">You Choose: ${userChoose}!</p>`;
    await sleep(2000);

    const computerChoose = await getComputerChoice();
    screen.innerHTML = `<p class="screen-text">Computer Choose: ${computerChoose}!</p>`;
    await sleep(2000);

    const result = playRound(userChoose, computerChoose);
    screen.innerHTML = `<p class="screen-text">${result}!</p>`;

    if (i >= 5) {
        const score =  `YOU(${humanScore}) VS COMPUTER(${computerScore})`
        if (humanScore > computerScore) {
            screen.innerHTML =`<p class="screen-text">FINAL WINNER: YOU! <br>${score}</p>`
        } else if (computerScore > humanScore) {
            screen.innerHTML = `<p class="screen-text">FINAL WINNER: COMPUTER!<br>${score}</p>`
        }
        clickDisabled = true;
        restClickDisabled = false;

        return;
    }
    ++i; // increment round count after playing

    clickDisabled = false;
    restClickDisabled = false;

}

function restGame(){
    if (restClickDisabled) return;
    clickDisabled = false;
    console.log('rest game');
    humanScore = 0;
    computerScore = 0;
    i = 0;
    screen.innerHTML = ``;
}


const options = document.querySelectorAll('.option');
const screen = document.querySelector('.screen');
const restButton = document.querySelector('.rest-btn');
restButton.addEventListener('click', restGame);

options.forEach((option) => {
    option.addEventListener('click', logScreenText);
})
console.log(screen)


//playGame()
