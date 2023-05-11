function game() {
    let playerScore = 0
    let computerScore = 0
    let i = 1

    while (i != 6) {
        result = (playRound(getComputerSelection(), getPlayerSelection(`Round - ${i} Choose: Rock, Paper or Scissors`)))
        switch (result) {
            case "win":
                playerScore++
                i++
                break;
        
            case "lose":
                computerScore++
                i++
                break;

            case "draw":
                playerScore++
                i++
                break;
        }
    }
    console.log(`Game finished, player has ${playerScore} points, computer has ${computerScore} points`)
}

function playRound(computerSelection, playerSelection) {
    
    console.log(`Computer chose ${computerSelection}`)
    console.log(`Player chose ${playerSelection}`)

    if (computerSelection == playerSelection) {
        console.log(`It's a draw, you both picked ${computerSelection}`)
        return "draw"
    }

    else if ((playerSelection == "rock" && computerSelection == "scissors") || 
            (playerSelection == "player" && computerSelection == "rock") ||
            (playerSelection == "scissors" && computerSelection == "paper")) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`)
        return "win"
    }

    else {
        console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
        return "lose"
    }
}

function getComputerSelection() {
    const arr = ["rock", "paper", "scissors"]
    return arr[Math.floor(arr.length * Math.random())]
}

function getPlayerSelection(message) {
    return checkPlayerSelection(prompt(message).toLowerCase())
}

function checkPlayerSelection(s) {
    return ["rock", "paper", "scissors"].includes(s) == true ? s : getPlayerSelection("Invalid choice, please try again")
}

game()