//lets you execute a function on a timer, function runs every x milliseconds
//make our own version of a timer

const timerText = document.getElementById("timer-text")
const btnStart = document.getElementById("btn-start")
let startButton = document.createElement("button")
let pauseButton = document.createElement("button")
pauseButton.textContent = "Pause Timer"
startButton.textContent = "Start Timer"
startButton.id ="btn-start"
pauseButton.id ="btn-pause"
document.body.appendChild(startButton)
document.body.appendChild(pauseButton)
let count = 0
let intervalId

startButton.addEventListener("click", function(){
    intervalId = setInterval(function(){
        count++
        timerText.textContent = count;
    }, 1000)

    //two arguments 1. function 2. time
})

pauseButton.addEventListener("click", function(){
    clearInterval(intervalId);
})