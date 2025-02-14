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


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        console.log(computerChoice);
        console.log(humanChoice);
        if (humanChoice == computerChoice) {
            console.log("No point!");
        } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
                   (humanChoice == "scissors" && computerChoice == "paper") || 
                   (humanChoice == "paper" && computerChoice == "rock")) {
            console.log("Point for you!");
            humanScore++;
        } else {
            console.log("Point for computer!");
            computerScore++;
        };
    };

    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(computerScore);
    console.log(humanScore);

    if (computerScore == humanScore) {
        console.log("It's a draw!");
    } else if (humanScore > computerScore) {
        console.log("Win for you!");
    } else {
        console.log("You looser!")
    }
}

const choiceButtons = document.querySelectorAll(".choiceButton");
choiceButtons.forEach(choiceButton => {
    choiceButton.addEventListener('click', (e) => {
        const playerChoice = e.target.innerText;
        console.log(playerChoice)
    })
})