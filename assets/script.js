let beginEl = document.getElementById ("begin-game");
beginEl.addEventListener("click", beginGame);
timeEl = document.getElementById("timer");
let timerId; 
let timeLeft = 120;
function beginGame (){
    console.log("beginGame button clicked")
    timerId = setInterval (timerFunc, 1000);
    timeEl.textContent = timeLeft;
        
    
}

function timerFunc() {
    timeLeft--;
    timeEl.textContent = timeLeft;
}