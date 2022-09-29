let beginEl = document.getElementById ("begin-game");
beginEl.addEventListener("click", beginGame);
let timeEl = document.getElementById("timer");
let timerId; 
let timeLeft = 120;
let bcEl = document.querySelector(".beginning-container");
let qcEl = document.querySelector("#question-container");


function beginGame (){
    console.log("beginGame button clicked")
    timerId = setInterval (timerFunc, 1000);
    timeEl.textContent = timeLeft;
    bcEl.removeAttribute("class", "show");
    bcEl.setAttribute("class", "hide");    
    qcEl.removeAttribute("class", "hide");  
}

function timerFunc() {
    timeLeft--;
    timeEl.textContent = timeLeft;

    if (timeLeft<= 0 ) {
        endGame ();

    }

}
 function endGame () {
    // tbd 
 }