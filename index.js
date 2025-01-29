let homeEl = document.getElementById('home-score');
let awayEl = document.getElementById('away-score');
let winnerEl = document.getElementById('winner');
let faulHomeEl = document.getElementById("faul-home")
let awayFaulEl= document.getElementById("faul-away")

let awayFaul = 0
let homeFaul = 0
let homeScore = 0;
let awayScore = 0;
homeEl.textContent = homeScore;
awayEl.textContent = awayScore;
faulHomeEl.textContent = 0
awayFaulEl.textContent = 0


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
    homeFaul = 0
    awayFaul = 0
    winnerEl.textContent = "";
    homeEl.textContent = homeScore;
    awayEl.textContent = awayScore;
    faulHomeEl.textContent = homeFaul
    awayFaulEl.textContent = awayFaul
}
function addFaulHome(){
    homeFaul += 1
    faulHomeEl.textContent = homeFaul
}
function addFaulAway(){
    awayFaul += 1
    awayFaulEl.textContent = awayFaul 

}
