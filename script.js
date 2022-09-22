if (!localStorage.getItem("number")){
    var num = 0;
    localStorage.setItem("number", num);
} else {
    var num = localStorage.getItem("number");  
}
document.getElementById("result").innerHTML = localStorage.getItem("number");
color();

function add() {
    num++; // num = num + 1;
    localStorage.setItem("number", num);
    document.getElementById("result").innerHTML = localStorage.getItem("number");
    color();
}

function color() {
    if (num > 4 && num < 10) {
        document.getElementById("result").style.color = "orange";
    } else if (num >= 10) {
        document.getElementById("result").style.color = "red";
    }
}
var ww;

function start() {
    if(typeof(Worker) !== "undefined") {   // == ===   !=  !==
        if(typeof(ww) == "undefined") {
            ww = new Worker("myheavycal.js");
        }
        ww.onmessage = function(event) {
            document.getElementById("result2").innerHTML = event.data;
        }; 
    } else {
        document.getElementById("result2").innerHTML = "WebWorker not available!";
    }
}

function stop() {
    ww.terminate();
    ww = undefined;
}

function geo() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation);
    } else {
        document.getElementById("result3").innerHTML = "Geolocation is not supported by your browser.";
    }
}

function showLocation(position) {
    document.getElementById("result3").innerHTML = "Latitude: " + 
    position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function allow(e) {
    e.preventDefault();
}
function drag(e) {
    e.dataTransfer.setData("text", e.target.id);
}
function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));  
}
// document.getElementByID("id")