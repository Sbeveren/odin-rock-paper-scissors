function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) return "rock";
    if (choice === 1) return "paper";
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?:");
    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`Draw! You both picked ${humanChoice}.`);
        return "draw";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "human";
    }

    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    return "computer";
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        const outcome = playRound(humanSelection, computerSelection);
        
        if (outcome === "human") {
            humanScore++;
        } else if (outcome === "computer") {
            computerScore++;
        } else if (outcome === "draw") {
            console.log("Draw. No points awarded.");
        }
    }

    if (humanScore > computerScore) {
        console.log(`You win! Scoreboard: ${humanScore} | ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lose! Scoreboard: ${humanScore} | ${computerScore}`);
    } else {
        console.log(`Draw! Scoreboard: ${humanScore} | ${computerScore}`);
    }
}

playGame();