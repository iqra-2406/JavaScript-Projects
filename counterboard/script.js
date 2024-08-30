let Homescore = 0;
const homeScoreEl = document.getElementById("num1-el");

function add1() {
    Homescore += 1
    homeScoreEl.textContent = Homescore;
}

function add2() {
    Homescore += 2
    homeScoreEl.textContent = Homescore;
}

function add3() {
    Homescore += 3
    homeScoreEl.textContent = Homescore;
}

// guest score

let Guestscore = 0;
const guestScoreEL = document.getElementById("num2-el");

function plus1() {
    Guestscore += 1;
    guestScoreEL.textContent = Guestscore;
}

function plus2() {
    Guestscore += 2;
    guestScoreEL.textContent = Guestscore;
}

function plus3() {
    Guestscore += 3;
    guestScoreEL.textContent = Guestscore;
}