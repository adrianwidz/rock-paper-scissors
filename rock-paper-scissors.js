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


function getHumanChoice() {
    
    let choice = "";
    while (true) {
        choice = prompt("Your move: ").toLowerCase();

        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            return choice;
        } else {
            alert("Invalid choice try again!");
        }

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

function playGame() {

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }


    if (computerScore == humanScore) {
        console.log("It's a draw!");
    } else if (humanScore > computerScore) {
        console.log("Win for you!");
    } else {
        console.log("You looser!");
    }
}

function scoreUpdate() {

    const playerScoreLabel = document.querySelector("#playerScore");
    const computerScoreLabel = document.querySelector("#computerScore");

    playerScoreLabel.innerText = "Player Score: " + playerScore;
    computerScoreLabel.innerText = "Computer Score: " + computerScore;



    
}

const choiceButtons = document.querySelectorAll(".choiceButton");
choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', (e) => {
        const playerChoice = e.target.innerText;
        playRound(playerChoice.toLowerCase(), getComputerChoice());
        scoreUpdate()
    })
});