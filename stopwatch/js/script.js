let timer; // To store the interval timer
let isRunning = false; // To track if the stopwatch is running
let startTime; // To store the start time
let elapsedTime = 0; // To store the elapsed time

function startStop() {
    if (!isRunning) {
        startTimer();
        document.getElementById("startStop").textContent = "Pause";
    } else {
        pauseTimer();
        document.getElementById("startStop").textContent = "Resume";
    }
}

function startTimer() {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 10); // Update time every 10 milliseconds
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
}

function reset() {
    pauseTimer();
    elapsedTime = 0;
    updateDisplay();
    document.getElementById("startStop").textContent = "Start";
}

function updateTime() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    updateDisplay();
}

function updateDisplay() {
    const milliseconds = Math.floor(elapsedTime % 1000 / 10);
    const seconds = Math.floor(elapsedTime / 1000 % 60);
    const minutes = Math.floor(elapsedTime / 60000 % 60);
    const hours = Math.floor(elapsedTime / 3600000);

    const displayString = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(2, '0')}`;

    document.getElementById("display").textContent = displayString;
}
