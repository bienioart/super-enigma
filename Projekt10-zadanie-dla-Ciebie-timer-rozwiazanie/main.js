const timer = () => {
    number = 0;
}


const clock = () => {
    number++;
    document.body.textContent = number + " sekund";


    return clock;
}

timer();
setInterval(clock(), 1000);