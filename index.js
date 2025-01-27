let homeEl = document.getElementById('home-score');
let awayEl = document.getElementById('away-score');
let winnerEl = document.getElementById('winner');

let homeScore = 0;
let awayScore = 0;
homeEl.textContent = homeScore;
awayEl.textContent = awayScore;


function winner(){
    if(homeScore > awayScore){
        winnerEl.textContent = "Home";
    } else if (awayScore > homeScore){
        winnerEl.textContent = "Guest";
    } else {
        winnerEl.textContent = "Tie";
    }
}


function addThree(){
    homeScore += 3;
    homeEl.textContent = homeScore;
    winner();
}
function addThreeAway(){
    awayScore += 3;
    awayEl.textContent = awayScore;
    winner();
}
function addTwo(){
    homeScore += 2;
    homeEl.textContent = homeScore;
    winner();
}
function addTwoAway(){
    awayScore += 2;
    awayEl.textContent = awayScore;
    winner();
}

function addOne(){
    homeScore += 1;
    homeEl.textContent = homeScore;
    winner();
}
function addOneAway(){
    awayScore += 1;
    awayEl.textContent = awayScore;
    winner();
}
function reset(){
    homeScore = 0;
    awayScore = 0;
    winnerEl.textContent = "";
    homeEl.textContent = homeScore;
    awayEl.textContent = awayScore;
}

