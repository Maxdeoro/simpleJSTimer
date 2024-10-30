let clock;

function Timerstart() {
    clock = setInterval('displayTime()', 100);
};

function displayTime() {
    const date = new Date();
    let currentTime = (date.getHours() < 10) ? '0' : '';
    currentTime += date.getHours();
    currentTime += (date.getMinutes() < 10) ? ':0' : ':';
    currentTime += date.getMinutes();
    currentTime += (date.getSeconds() < 10) ? ':0' : ':';
    currentTime += date.getSeconds();
    currentTime += (date.getMilliseconds() < 10) ? ':0' : ':';
    currentTime += date.getMilliseconds();

    document.getElementById('div1').innerHTML = currentTime;
};

function Timerstop() {
    clearInterval(clock);
};