function computerPlay () {
    let num = Math.floor(Math.random() * 4);
    if (num <= 1) {
        return "Rock";
    } else if (num <= 2) {
        return "Scissors";
    } else if (num <= 3) {
        return "Paper";
    } else {
        return "something went wrong";
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection == "Scissors") {
        return "You Win! Paper beats Scissors!";
    } else if (playerSelection === "rock" && computerSelection == "Rock") {
        return "Its a Tie! You Both Chose Rock!";
    } else if (playerSelection === "scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection == "Scissors") {
        return "Its a Tie! You Both Chose Scissors!";
    } else if (playerSelection === "scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection == "Paper") {
        return "Its a Tie! You Both Chose Paper!";
    } else if (playerSelection === "paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper!";
    } else if (playerSelection === "paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock!";
    } else {
        return "You cant do that!";
    }
}

let playerSelection = "";
let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const answer = document.getElementById("answer");
const answer2 = document.getElementById("answer2");


rock.addEventListener('click', () => {
    game("rock");
})
paper.addEventListener('click', () => {
    game("paper");
});
scissors.addEventListener('click', () => {
    game("scissors");
});
function done (playerScore, computerScore) {
    let winner = "You"
    if (playerScore - computerScore < 0) winner = "The Computer";
    if (confirm(`${winner} won! Press OK to start a new game!`)) {
        start();
    } else {
        return;
    };
}

function start () {
    playerScore = 0;
    computerScore = 0;
    answer.textContent = (`${playerScore} - ${computerScore}`);
    answer2.textContent = `Lets play Rock, Paper, Scissors!`;
}

start();

function game(selection) {
    if (playerScore >= 5 || computerScore >=5) return done(playerScore, computerScore);
    playerChoice = "You Chose " + selection;
    console.log(playerChoice);
    computerSelection = computerPlay();
    let win = (playRound(selection, computerSelection))
    if (win.slice(4, 7) === "Win") {
        playerScore = playerScore + 1;
        answer2.textContent = `${win}`;
    } else if (win.slice(4, 7) === "Los") {
        computerScore = computerScore + 1;
        answer2.textContent = `${win}`;
    } else {
        answer2.textContent = `${win}`;
    }
    console.log(win);
    answer.textContent = (`${playerScore} - ${computerScore}`);
}
