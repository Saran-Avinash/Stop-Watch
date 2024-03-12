let startTime = 0;
let isRunning = false;
let timer = 0;
let elapsedTime = 0;


function start(){

    if(!isRunning){
        startTime = Date.now() - elapsedTime;
        console.log(startTime)
        timer = setInterval(update, 1000);
        isRunning = true;
    
    }
}


function stop(){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
}


function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    document.getElementById("display").innerHTML = "00:00:00";
}

function update(){
 

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    console.log(currentTime);
    console.log(elapsedTime);

    let seconds = Math.floor(elapsedTime / 1000 % 60).toString().padStart(2,0);
    let minutes = Math.floor(elapsedTime / (1000 * 60)).toString().padStart(2, 0);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)).toString().padStart(2, 0);
    document.getElementById("display").innerHTML = `${hours}:${minutes}:${seconds}`;
}

