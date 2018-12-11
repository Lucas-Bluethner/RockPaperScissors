var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

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
    const userSubscript = "user".fontsize(3).sub();
    const compSubscript = "comp".fontsize(3).sub();
    userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userSubscript} beats ${convertToWord(compChoice)}${compSubscript}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() { userChoice_div.classList.remove('green-glow') }, 300);
}

function lose(userChoice, compChoice) {
    const userSubscript = "user".fontsize(3).sub();
    const compSubscript = "comp".fontsize(3).sub();
    userChoice_div = document.getElementById(userChoice);
    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${userSubscript} loses to ${convertToWord(compChoice)}${compSubscript}. You lose...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function() { userChoice_div.classList.remove('red-glow') }, 300);
}

function draw(userChoice, compChoice) {
    const userSubscript = "user".fontsize(3).sub();
    const compSubscript = "comp".fontsize(3).sub();
    userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${userSubscript} equals ${convertToWord(compChoice)}${compSubscript}. It's a draw.`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(function() { userChoice_div.classList.remove('grey-glow') }, 300);
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