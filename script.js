let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorButton = document.querySelector('.scissor')
const scores = document.querySelector('.scores')
const p = document.createElement('p')
const h2 = document.createElement('h2')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')


function getComputerChoice() {
    rng = Math.floor(Math.random() * 3)
    if (rng === 0) {
        return "rock";
    } else if (rng === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        p.innerText = `It's a draw! You both chose ${playerSelection}`
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper"))
    {
        playerScore++
        p.innerText = `You Win! You chose ${playerSelection} and the computer chose ${computerSelection}`
    } else {
        computerScore++
        p.innerText = `You Lose! You chose ${playerSelection} and the computer chose ${computerSelection}`
    }
    scores.appendChild(p)
}

const checkWinner = (playerScore, computerScore) => {
    if (playerScore === 5) {
        h2.innerText = `YOU WIN THE GAME`
        scores.removeChild(p)
    } 
    if (computerScore === 5) {
        h2.innerText = `YOU LOST THE GAME`
        scores.removeChild(p)
    }
    scores.append(h2)
}

const updateScores = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `${playerScore}`
    computerScoreSpan.innerText = `${computerScore}`
}

rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "rock"
    round(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "paper"
    round(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})

scissorButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = "scissor"
    round(playerSelection, computerSelection)
    updateScores(playerScore, computerScore)
    checkWinner(playerScore, computerScore)
})