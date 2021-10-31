var walk = document.getElementsByTagName("img")[0];
const slower = document.getElementById("button1");
const faster = document.getElementById("button2");
const clear = document.getElementById("button3");
const start = document.getElementById("button4");

var step = ["step1.jpg", "step2.jpg", "step3.jpg", "step4.jpg", "step5.jpg"];

counter = 0;
function walking(){
    if(counter > 4) {
        counter = 0;}
     walk.src = step[counter];
    counter ++;
}

var i = 4;
var speedNumbers = [40, 60, 90, 120, 150, 180, 210, 240, 270];

start.onclick = function(){
    clearInterval(interval);
    interval = setInterval(walking, speedNumbers[i]);
}

clear.onclick = function(){
    clearInterval(interval);
}

slower.onclick = function(){
    clearInterval(interval);
    i = i+1;
    if(i >= speedNumbers.length)
    {
        alert("Can't go slower");
        i = 8;
    }
    else if (i<0)
    {
        i = 0;
    }
   interval = setInterval(walking, speedNumbers[i]);
}

faster.onclick = function(){
    clearInterval(interval);
    i = i-1;
    if(i >= speedNumbers.length)
    {
        i = 8;
    }
    else if (i < 0)
    {
        alert("Can't go faster");
        clearInterval(interval);
        i = 0;
    }
    interval = setInterval(walking, speedNumbers[i]);
}
var interval = setInterval(walking, speedNumbers[i]);