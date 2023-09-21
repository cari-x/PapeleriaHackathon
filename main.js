
const numeroClicks = document.getElementById("contador");
let contador = 0;

function contarClicks() {
    contador+= 1;
    numeroClicks.textContent = contador;}