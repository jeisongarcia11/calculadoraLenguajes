//Variables
const inputPalabra = document.querySelector('#word');
const btnLenguaje = document.querySelector('button[type="submit"]');
const formulario = document.querySelector('#form');
const enlaceInver = document.querySelector('#inversa');
const enlaceCardi = document.querySelector('#cardinalidad');
let valorInput = [];

cargarEventListeners();
function cargarEventListeners(){
    formulario.addEventListener('submit', leerPalabra);
}

function leerPalabra(e){
    e.preventDefault();
    valorInput = inputPalabra.value;
    mostrarPalabra();
}

function mostrarPalabra(){
        enlaceInver.textContent = inversoString(valorInput).join("").toLowerCase();
        enlaceCardi.textContent = cardinalidad(valorInput);
}