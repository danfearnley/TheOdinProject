function getComputerChoice () {
    if ((Math.floor(Math.random() * 3 ) + 1) === 1) {
        return "Scissors";
    }
    else if ((Math.floor(Math.random() * 3 ) + 1) === 2) {
        return "Paper";
    }
    else {
        return "Rock";
    }
}

function playGame(playerChoice, computerChoice) {
    let player = playerChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if ((player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")) {
            k++;
            return `You win! ${player} beats ${computer}
            Score is Player:${k} Computer:${l}`;
        }
    else if ((player === "rock" && computer === "paper") ||
            (player === "scissors" && computer === "rock") ||
            (player === "paper" && computer === "scissors")) {
        l++;
        return `You lose! ${computer} beats ${player}
        Score is Player:${k} Computer:${l}`;
    }
    else {
        return `Tie game!
        Score is Player:${k} Computer:${l}`;
    }
}

let k = 0;
let l = 0;

for (let i = 1; i <= 5; i++) {
    let playerChoice = prompt("Enter your choice:");
    console.log(playGame(playerChoice, getComputerChoice()))
}

