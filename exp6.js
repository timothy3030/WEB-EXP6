function display() {
    let d = new Date();
    let hour = parseInt(d.getHours());
    let min = d.getMinutes();
    let sec = d.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    document.getElementById('clock').innerHTML = hour + ':' + min +
    ':' + sec;
    } 
    setInterval(display, 1000);
    function bgcolor() {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById('dynamic').style.backgroundColor = color;
    } 
    setInterval(bgcolor, 1000);
    function incSIZE() {
    document.getElementById("texte").style.fontSize = "4em";
}
function decSIZE() {
document.getElementById("texte").style.fontSize = "2em";
}
var t;
var c;
var pos = 0;
function init() {
t = setInterval('moveCar()', 100);
}
function initl() {
c = setInterval('moveCarl()', 100);
}
function moveCar() {
var car = document.getElementById('car');
pos += 10;
car.style.left = pos + 'px';
}
function moveCarl() {
var car = document.getElementById('car');
pos -= 10;
if (pos >= 0) {
car.style.left = pos + 'px';
}
else {
pos = 0;
return;
}
}
function stopCar() {
clearTimeout(t);
clearTimeout(c);
car.style.left = pos + 'px';
car.style.right = pos + 'px';
}
function resetcar() {
    clearTimeout(t);
    clearTimeout(c);
    pos = 0
    car.style.left = pos + 'px';
    }
    function displayl() {
    var sp = document.getElementById('Std');
    var dicg = [{ name: 'TIM', r_No: '20cs3030', dob: '19-05-22' },
    { name: 'david', r_No: '20cs2041', dob: '19-06-03'}];
    // console.log(dicg[0].name)
    for (var i = 0; i<dicg.length; i++) {
    sp.innerHTML += "<br>"+'Student Name:' + dicg[i].name +"<br>"+
    'Register_Number: ' + dicg[i].r_No + "<br>"+'Date of Brith: ' +
    dicg[i].dob + "<br>";
    }
    }