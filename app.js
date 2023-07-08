let userScore = 1;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerchoice() {
    const choices = ['r', 'p', 's'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function conv(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissor"
}

const suw = "user".fontsize(5).sub()
const scw = "comp".fontsize(5).sub()

function win(user, comp) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${conv(user) + suw} beats ${conv(comp) + scw}. You Win! 😎`;
    document.getElementById(user).classList.add('win-glow');
    setTimeout(() => document.getElementById(user).classList.remove('win-glow'), 500);

}

function lose(user, comp) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = `${conv(comp) + scw} beats ${conv(user) + suw}. You Lost! 💩`;
    document.getElementById(user).classList.add('lose-glow');
    setTimeout(() => document.getElementById(user).classList.remove('lose-glow'), 500);
}

function draw(user, comp) {
    result_div.innerHTML = `${conv(user) + suw} equals ${conv(comp) + scw}. It's a Draw! 🤓`;
    document.getElementById(user).classList.add('draw-glow');
    setTimeout(() => document.getElementById(user).classList.remove('draw-glow'), 500);
}

function game(userChoice) {
    const compChoice = getComputerchoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, compChoice);
            break;

        case "sr":
        case "rp":
        case "ps":
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
    rock_div.addEventListener('click', () => game("r"))
    
    paper_div.addEventListener('click', () => game("p"))
    
    scissor_div.addEventListener('click', () => game("s"))
}

main();
