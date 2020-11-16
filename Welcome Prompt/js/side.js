"use strict"
let name = prompt( "What is your name?");
document.getElementById("welli").innerHTML = "Welcome" + " " +" " + name + "!";


function openBar(){
    document.getElementById("end").style.display ="block";
    document.getElementById("welli").style.display ="none";

}
function closeCross(){
    document.getElementById("end").style.display ="none";
    document.getElementById("welli").style.display ="none";
    document.getElementById("bars").innerHTML = "Thank you for waiting" + " " + name + "&#129309";

}