// http://websamuraj.pl/examples/js/projekt11/

const start = document.querySelector('.main');
const reset = document.querySelector('.reset');
let timer = new Date();
const diver = document.querySelector('body > div > div');
let hours = 0;
let minutes = 0;
let seconds = 0;
let active = false;



function actionStart() {

    if (active){
    setTimeout(actionStart, 1000);
    diver.innerHTML = hours + ":" + minutes + ":" + seconds;
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes >= 60) {
        hours++;
        minutes = 0;
    }
}
};
    // else {
    //     clearTimeout();
    // }



function actionReset() {
    clearTimeout(actionStart);
    diver.textContent = "---";
    hours = 0;
    minutes = 0;
    seconds = 0;
    active = false;
}






start.addEventListener('click', actionStart);
reset.addEventListener('click', actionReset);