// funkcija kura maina izskatu BrandLogo

function myFunction() {
    document.getElementById("brandID").style.backgroundColor = "yellow";
    document.getElementById("brandID").style.color = "black";
};

// izsauka message ka valoda ir nomainita

function changeLV(){
    alert("Valoda mainita uz latviešu");
}

function changeRU(){
    alert("Valoda mainita uz krievu");
}
// Praktiskie darbi forma caur if

function know() {
    let n, s;
    n = document.getElementById('num').value;
    s = document.getElementById('result');
    n = parseInt(n);
    if (n == 10) {
        s.innerHTML = 'Number is 10';
    }
    else if (n < 10) {
        s.innerHTML = 'Number < 10';
    }
    else {
        s.innerHTML = 'Number > 10';
    }
};

// Praktiskie darbi Cikli

function start() {
let a, b;
a = document.getElementById('numB').value;
b = document.getElementById('resultB');
a = parseInt(a);
//let diena = "";
switch (a) {
case 1:
    b.innerHTML = "Pirmdiena";
break;

case 2:
    b.innerHTML ="Otrdiena";
break;

case 3:
    b.innerHTML ="Trešdiena";
break;

default:
    b.innerHTML ="Cita diena";
break;
}
}

//funkcija kura izveido jaunu elemntu uz lapas

function addNew() {
    const app = document.getElementById("root");
    let data 
    const div = document.createElement('div');
    const body = document.body; 
    body.appendChild(div);
    
    const header = document.createElement('h1');
    div.appendChild(header);
    header.textContent = 'New text is added';
    
};