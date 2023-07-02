function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var target = ev.target;
    target.appendChild(document.getElementById(data));

    updateShadow();
    comprobarPuzzle();
}
  
function updateShadow() {
    let piezas = document.querySelectorAll(".drag");
    for (var i = 0; i < piezas.length; i++) {
        var pieza = piezas[i];
        if (pieza.childElementCount > 0) {
            pieza.classList.add("shadow");
        } 
        else {
            pieza.classList.remove("shadow");
        }
    }
}

function comprobarPuzzle() {
    var piezasCorrectas = 0;
    if (document.getElementById("div1").contains(document.getElementById("drag7"))) {
        piezasCorrectas++;
    }
    if (document.getElementById("div2").contains(document.getElementById("drag6")) || document.getElementById("div2").contains(document.getElementById("drag11")) ) {
        piezasCorrectas++;
    }
    if (document.getElementById("div3").contains(document.getElementById("drag6")) || document.getElementById("div3").contains(document.getElementById("drag11")) ) {
        piezasCorrectas++;
    }
    if (document.getElementById("div4").contains(document.getElementById("drag5")) || document.getElementById("div4").contains(document.getElementById("drag12")) ) {
        piezasCorrectas++;
    }
    if (document.getElementById("div5").contains(document.getElementById("drag4"))) {
        piezasCorrectas++;
    }
    if (document.getElementById("div6").contains(document.getElementById("drag9"))) {
        piezasCorrectas++;
    }
    if (document.getElementById("div7").contains(document.getElementById("drag5")) || document.getElementById("div7").contains(document.getElementById("drag12")) ) {
        piezasCorrectas++;
    }
    if (document.getElementById("div8").contains(document.getElementById("drag10"))) {
        piezasCorrectas++;
    }
    if (document.getElementById("div9").contains(document.getElementById("drag8"))) {
        piezasCorrectas++;
    }
    
    if (piezasCorrectas == 9) {
        alert("¡Puzle completado!");
        text.classList.add("win");
    }
    else text.classList.remove("win");

}
