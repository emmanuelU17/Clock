var sec = document.querySelector(".second")
var min = document.querySelector(".minute");
var hr = document.querySelector(".hour");

setInterval(function count(){
var date = new Date();

var secDeg = date.getSeconds() / 60 ;
var minDeg = (secDeg + date.getMinutes()) / 60 ;
var hrsDeg = (date.getHours() + minDeg) / 12 ;


Rotation(sec, secDeg);
Rotation(min, minDeg);
Rotation(hr, hrsDeg);
}, 
1000);


function Rotation(element, degree){
element.style.transform = `rotate(${degree * 360}deg)`;
}