function sayHello(){
	alert("Hello");
}



function changeBackground(color){
    document.body.style.background = color;
}
var counter = 0;
var intervalID = 0;
function myTimer(){
    let min = floor(counter/60);
    let sec = counter%60; 
    str = min.toString();
    str2 = sec.toString();
    str3 = str+':'+str2;
    counter++;
    document.getElementById("demo").innerHTML = str3;
    document.getElementById("demo").innerHTML = "hello";
}
var countdown;
function myTimer2() {
    countdown = setInterval(myTimer4,10);
    myTimer4();
  }

function myTimer4(){
    var ms = counter%100;
    var sec = Math.floor(counter/100);
    var c = counter++;
    
    document.getElementById("demo").innerHTML = sec.toString() + ':' + ms.toString();
}

function myTimer3(){
    var min = Math.floor(counter/60);
    var sec = counter%60;
    str1 = min.toString();
    var c = counter++;
    
    document.getElementById("demo").innerHTML = min.toString() + ':' + sec.toString();
}

function stopInterval(){
    clearInterval(countdown);
}

function Reset(){
    stopInterval(countdown);
    counter = 0;
    document.getElementById("demo").innerHTML = "0:0";
}