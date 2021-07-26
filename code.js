let countdownButton = document.querySelector(".countdown__button");
countdownButton.addEventListener("click", () => initTimer());

let timerId = null;
let finalDate = null;

function initTimer() {
    clearInterval(timerId); // reset
    let message = document.querySelector(".countdown__message");
    message.style.display = "none";

    finalDate = document.querySelector(".countdown__input").value;
    if(finalDate == "") return;
    
    finalDate = new Date(finalDate);

    timer();
    timerId = setInterval(timer, 1000);
}

function timer() {
    let now = new Date().getTime();
    let interval = Math.floor((finalDate.getTime() - now) / 1000);

    if(interval < 0) {
        let message = document.querySelector(".countdown__message");
        message.style.display = "block";
        clearInterval("timerId");
        clearTimer();
        return;
    }

    let days = Math.floor((interval) / (60 * 60 * 24));
    let hours = Math.floor(((interval) % (60*60*24)) / (60*60));
    let minutes = Math.floor((interval) % (60*60) / 60);
    let seconds = Math.floor((interval) % 60);

    setHtmlBySelector("#countdown__timer-days h3", days);
    setHtmlBySelector("#countdown__timer-hours h3", hours);
    setHtmlBySelector("#countdown__timer-minutes h3", minutes);
    setHtmlBySelector("#countdown__timer-seconds h3", seconds);
}

function clearTimer() {
    setHtmlBySelector("#countdown__timer-days h3", days);
    setHtmlBySelector("#countdown__timer-hours h3", hours);
    setHtmlBySelector("#countdown__timer-minutes h3", minutes);
    setHtmlBySelector("#countdown__timer-seconds h3", seconds);

    
}

function setHtmlBySelector(selector, value) {
    document.querySelector(selector).innerHTML = value;
}