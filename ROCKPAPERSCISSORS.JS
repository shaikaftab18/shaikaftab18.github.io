let score = JSON.parse(localStorage.getItem("score")) || {
    Win: 0,
    Tie: 0,
    Lose: 0
};

function updatescoreElement() {
    document.querySelector('.js-rock').innerHTML = `WINS: ${score.Win}   LOSES: ${score.Lose}   TIES: ${score.Tie}`;
}

function play(userMove) {
    const randomNumber = Math.random();
    let computersMove = "";
    let result = "";

    if (randomNumber < 1 / 3) {
        computersMove = "ROCK";
    } else if (randomNumber < 2 / 3) {
        computersMove = "PAPER";
    } else {
        computersMove = "SCISSORS";
    }

    if (userMove === computersMove) {
        result = "Tie";
    } else if (
        (userMove === "ROCK" && computersMove === "SCISSORS") ||
        (userMove === "PAPER" && computersMove === "ROCK") ||
        (userMove === "SCISSORS" && computersMove === "PAPER")
    ) {
        result = "Congratulations! You won";
    } else {
        result = "You Lose";
    }

    if (result === "Congratulations! You won") {
        score.Win++;
    } else if (result === "Tie") {
        score.Tie++;
    } else {
        score.Lose++;
    }

    localStorage.setItem("score", JSON.stringify(score));
    updatescoreElement();

    document.querySelector('.js-paper').innerHTML = `Your choice <img src="${userMove}-emoji.png" class="move">  <img src="${computersMove}-emoji.png" class="move"> Computer's Choice`;
    document.querySelector('.js-scissors').innerHTML = ` Result is ${result}`;
}

function resetScore() {
    score.Win = 0;
    score.Lose = 0;
    score.Tie = 0;
    localStorage.removeItem('score');
    updatescoreElement();
    alert('Score has been reset');
}

updatescoreElement();