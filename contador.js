let contContainer = document.getElementById('cuenta')
let button = document.querySelector('.button')
let paragraph1 = document.querySelector('.letter1')
let paragraph2 = document.querySelector('.letter2')
let paragraph3 = document.querySelector('.letter3')
let paragraph4 = document.querySelector('.letter4')
var countDate = new Date('Jul 13, 2022 01:03:00').getTime();

var tiempo = setInterval(() => {
    var now = new Date().getTime();
    var diferencia = countDate - now;

    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    contContainer.innerHTML= dias + ":" + horas + ":" + minutos + ":" + segundos;
    if(dias <0 && horas <0 && minutos<0 && segundos<0) {
        contContainer.innerHTML="Feliz aniversario hermosos!!!"
        console.log(paragraph1)
        paragraph1.classList.add('none')
        paragraph2.classList.add('none')
        paragraph3.classList.add('none')
        paragraph4.classList.add('none')
        button.innerHTML="<button><a href='recuerdos.html'>Recuerdos</a></button>"
    }
}, 1000);

