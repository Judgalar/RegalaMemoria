'use strict'

function cadena(){  // Devuelve una cadena de tamaño 12 con las parejas ordenadas
    let simbolo = 1;
    let cartas = [];

    for( let i=0 ; i<12 ; i=i+2 ){
        cartas[i]=simbolo;
        cartas[i+1]=simbolo;
        simbolo++;
    }
    return cartas;
}

function barajar(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function vuelta(id){
    if( (cartasLevantadas<2) && (id!=posicionAnterior)){
        if(estado[id] != "resuelta"){
            switch(arr[id]){
                case 1:
                    document.getElementById(id).innerHTML = '<img src="img/1.png">';
                    break;
                case 2:
                    document.getElementById(id).innerHTML = '<img src="img/2.png">';
                    break;
                case 3:
                    document.getElementById(id).innerHTML = '<img src="img/3.png">';
                    break;
                case 4:
                    document.getElementById(id).innerHTML = '<img src="img/4.png">';
                    break;
                case 5:
                    document.getElementById(id).innerHTML = '<img src="img/5.png">';
                    break;
                case 6:
                    document.getElementById(id).innerHTML = '<img src="img/6.png">';
                    break;
            }
            estado[id] = "levantada";
            cartasLevantadas++;
            document.getElementById("intentos").innerHTML = intentos;
        }
        if(cartasLevantadas == 2){
            intentos++;
            if( (estado[id] == "levantada") && (arr[id] == arr[posicionAnterior] ) && (id != posicionAnterior) ){
                estado[id] = "resuelta";
                estado[posicionAnterior] = "resuelta";
                parejasAcertadas++;
                document.getElementById("parejas").innerHTML = parejasAcertadas;
                document.getElementById(id).style.backgroundColor = "#4CAF50";
                document.getElementById(posicionAnterior).style.backgroundColor = "#4CAF50";
            }
            setTimeout(tapar, 1000);
            if(parejasAcertadas==6) acabado();
        }
        if(cartasLevantadas == 1) posicionAnterior = id;
    }
}

function tapar(){
    for( let i = 0 ; i<12 ; i++ ){
        if(estado[i] != "resuelta"){
            document.getElementById(i).innerHTML = '<img src="img/question.png" alt="">';
            estado[i] = "?";
        }
    }
    cartasLevantadas = 0;
    posicionAnterior = -1;
}

function reiniciar(){
    arr = barajar( cadena() );
    estado = ["?","?","?","?","?","?","?","?","?","?","?","?"];
    cartasLevantadas = 0;
    posicionAnterior = -1;
    intentos = 1;
    parejasAcertadas = 0;
    tapar();
    document.getElementById("intentos").innerHTML = intentos;
    document.getElementById("parejas").innerHTML = parejasAcertadas;
    document.getElementById("acabado").innerHTML = '';
    document.getElementById("acabado").innerHTML = '';
    for( let i=0 ; i<12 ; i++ ) document.getElementById(i).style.backgroundColor = "";
}

function acabado(){
    if(intentos-1<record) record = intentos-1;
    myModal.show();
    document.getElementById("acabado").innerHTML = '<h1>Has Acabado</h1>';
    document.getElementById("acabado").innerHTML += '<button class="btn btn-success" onclick="reiniciar()">Jugar de nuevo</button>';
    document.getElementById("record").innerHTML = record
}

const myModal = new bootstrap.Modal(document.getElementById("finishModal"));

let arr = barajar( cadena() );
let estado = ["?","?","?","?","?","?","?","?","?","?","?","?"];
let cartasLevantadas = 0;
let posicionAnterior = -1;
let intentos = 1;
let parejasAcertadas = 0;
let record = 999;

document.getElementById("intentos").innerHTML = intentos;
document.getElementById("parejas").innerHTML = parejasAcertadas;
