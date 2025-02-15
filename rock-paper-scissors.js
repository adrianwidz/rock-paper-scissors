let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    };
};

function playRound(humanChoice, computerChoice) {
    const resultLabel = document.querySelector("#result");

    if (humanChoice == computerChoice) {
        resultLabel.innerText = "No point!"
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
               (humanChoice == "scissors" && computerChoice == "paper") || 
               (humanChoice == "paper" && computerChoice == "rock")) {
        resultLabel.innerText = "Point for you!"
        playerScore++;
    } else {
        resultLabel.innerText = "Point for computer!"
        computerScore++;
    };
};


function scoreUpdate() {

    const playerScoreLabel = document.querySelector("#playerScore");
    const computerScoreLabel = document.querySelector("#computerScore");

    playerScoreLabel.innerText = "Player Score: " + playerScore;
    computerScoreLabel.innerText = "Computer Score: " + computerScore;

    if (computerScore == 5 || playerScore == 5) {

        const choiceButtons = document.querySelectorAll(".choiceButton");
        choiceButtons.forEach(choiceButton => choiceButton.setAttribute('disabled', ''));

        const resultLabel = document.querySelector("#result");

        if (playerScore > computerScore) {
            resultLabel.innerText = "Game Over: Win for you!"
        } else {
            resultLabel.innerText = "Game Over: You looser!"
        }

        const resetButton = document.createElement("button");
        resetButton.textContent = "Play again";
        document.body.appendChild(resetButton);

        resetButton.addEventListener("click", () => {
            location.reload();
        })

    }
}

const choiceButtons = document.querySelectorAll(".choiceButton");
choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', (e) => {
        const playerChoice = e.target.innerText;
        playRound(playerChoice.toLowerCase(), getComputerChoice());
        scoreUpdate()
    })
});