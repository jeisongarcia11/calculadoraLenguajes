//Variables
const inputLenguaje1 = document.querySelector('#languagueOne');
const inputLenguaje2 = document.querySelector('#languagueTwo');
const btnLenguaje = document.querySelector('button[type="submit"]');
const formulario = document.querySelector('#form');
let   potencia = parseInt(document.querySelector('#potencia').value);
const enlaceUnion = document.querySelector('#union');
const enlaceInter = document.querySelector('#interseccion');
const enlaceDiff = document.querySelector('#diferencia');
const enlaceConcat = document.querySelector('#concatenacion');
const enlacePoten = document.querySelector('#potencia');
const enlaceInver = document.querySelector('#inversa');
const enlaceCardi = document.querySelector('#cardinalidad');
let valorInput1 = [];
let valorInput2 = [];
let inputs = [];

//Listeners
cargarEventListeners();
function cargarEventListeners(){

    formulario.addEventListener('submit', leerLenguaje);
}

function leerLenguaje(e){
    e.preventDefault();
    
    valorInput1= inputLenguaje1.value.split(",");
    valorInput2 = inputLenguaje2.value.split(",");
    valorInput1 = valorInput1.map(el => el.trim());
    valorInput2 = valorInput2.map(el => el.trim());
    inputs = valorInput1.concat(valorInput2);
    potencia = parseInt(document.querySelector('#potencia').value);
    mostrarLenguaje();
}

function mostrarLenguaje(){
        enlaceUnion.textContent = `{${mostrarUnion(inputs)}}`;
        enlaceInter.textContent = `{${mostrarInterseccion(inputs)}}`;
        enlaceDiff.textContent = `{${mostrarDiferencia(valorInput1,valorInput2)}}`;
        enlaceConcat.textContent = `{${concatenacion(valorInput1,valorInput2)}}`;
        enlacePoten.textContent = `{${fPotencia(valorInput1,potencia - 1)}}`;
        enlaceInver.textContent = `{${inversoArray(valorInput1)}}`;
        enlaceCardi.textContent = cardinalidad(valorInput1);
}