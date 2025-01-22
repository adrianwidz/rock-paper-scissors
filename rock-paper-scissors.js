console.log("Hello World!");

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

console.log(getComputerChoice());

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

console.log(getHumanChoice());