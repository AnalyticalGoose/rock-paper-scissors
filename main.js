
const playerScoreText = document.querySelector('.player-score')
const computerScoreText = document.querySelector('.computer-score')
const infoText = document.querySelector('.info-text')
const buttons = document.querySelectorAll('button')

let roundCount = 0

const buttonListen = document.querySelectorAll('button')
buttonListen.forEach((button) => {
    button.addEventListener('click', (e) => {
        getPlayerSelection(e)
    })
})

function getPlayerSelection(e) {
    game(e.target.className)
}

function getComputerSelection() {
    const arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(arr.length * Math.random())]
}

function game(playerSelection) {
    let roundResult = playRound(playerSelection)
    scoreChange = calculateScore(roundResult)
    roundCount += 1

    roundCount == 5 ? endGame() : false
}

function playRound(playerSelection) {
    let computerSelection = getComputerSelection()

    if (computerSelection == playerSelection) {
        infoText.textContent = `It's a draw, you both picked ${playerSelection}`
        return("draw")
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
            (playerSelection == "player" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) {
        infoText.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        return("win")
    }
    else {
        infoText.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        return("lose")
    }
}

function calculateScore(result) {
    if (result == "win") {
        playerScoreText.textContent++
    }
    else if (result == "lose") {
        computerScoreText.textContent++
    }
    else {
        playerScoreText.textContent++
        computerScoreText.textContent++
    }
    return
}

function endGame() {   
    infoText.textContent = `Game over. Thank you for playing`
    buttons.forEach ((button) => {
        button.setAttribute('id', 'hide')
    })
}