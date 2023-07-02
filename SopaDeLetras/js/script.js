import {diccionario} from './diccionario.js';


function nuevaSopa(nPalabras){

    // Array con las palabras que el usuario debe buscar
    let palabras = [];
    for(let i = 0; i < nPalabras; i++){
        let palabra = diccionario[Math.floor(Math.random() * diccionario.length)];
        palabras.push(palabra);
    }

    // Comienza un juego de palabras
    const sopaLetras = wordfindgame.create(palabras, '#contenedor', '#palabras-sopadeletras');

    // Función para resolver la sopa de letras       
    let resolverListener = function() {
        wordfindgame.solve(sopaLetras, palabras);
    };     

    const BTNresolver = document.getElementById('BTNresolver');
    const nuevoElemento = BTNresolver.cloneNode(true);
    BTNresolver.parentNode.replaceChild(nuevoElemento, BTNresolver);

    document.getElementById('BTNresolver').addEventListener('click', resolverListener);

}

document.getElementById('1').addEventListener('click', function(){
    nPalabras = 1;
    nuevaSopa(1);
})
document.getElementById('2').addEventListener('click', function(){
    nPalabras = 2;
    nuevaSopa(2);
})
document.getElementById('3').addEventListener('click', function(){
    nPalabras = 3;
    nuevaSopa(3);
})
document.getElementById('5').addEventListener('click', function(){
    nPalabras = 5;
    nuevaSopa(5);
})
document.getElementById('10').addEventListener('click', function(){
    nPalabras = 10;
    nuevaSopa(10);
})
document.getElementById('15').addEventListener('click', function(){
    nPalabras = 15;
    nuevaSopa(15);
})
document.getElementById('20').addEventListener('click', function(){
    nPalabras = 20;
    nuevaSopa(20);
})

document.getElementById('BTNrefresh').addEventListener('click', function(){
    nuevaSopa(nPalabras);
})

let nPalabras = 1;
nuevaSopa(1);