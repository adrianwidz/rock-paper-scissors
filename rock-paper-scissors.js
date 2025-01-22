let humanScore = 0;
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
    console.log(computerChoice);
    console.log(humanChoice);
    if (humanChoice == computerChoice) {
        console.log("It's a draw!");
    } else if ((humanChoice == "rock" && computerChoice == "scissors") || 
               (humanChoice == "scissors" && computerChoice == "paper") || 
               (humanChoice == "paper" && computerChoice == "rock")) {
        console.log("You won!");
    } else {
        console.log("You loose!");
    }
}

playRound(getHumanChoice(), getComputerChoice());