var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCompChoice() {
    const choice = ['r', 'p', 's'];
    const randomNumber = Math.round(Math.random() * 2);
    return choice[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    return "Scissors"
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const userSubscript = "user".fontsize(3).sub();
    const compSubscript = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${userSubscript} beats ${convertToWord(compChoice)}${compSubscript}. You win!`; 
}

function lose(userChoice, compChoice) {
    compScore++;
    compScore_span.innerHTML = compScore;
    const userSubscript = "user".fontsize(3).sub();
    const compSubscript = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${userSubscript} loses to ${convertToWord(compChoice)}${compSubscript}. You lose...`; 
}

function draw(userChoice, compChoice) {
    const userSubscript = "user".fontsize(3).sub();
    const compSubscript = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${userSubscript} equals ${convertToWord(compChoice)}${compSubscript}. It's a draw.`; 
}

function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, compChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    
    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();