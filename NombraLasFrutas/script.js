"use strict";

let score = 0;
let currentFruit = "";
const fruits = ["manzana", "platano", "naranja", "pera", "fresa", "aguacate", "arandano", "cereza", "coco", "kiwi", "limon", "mango", "melocoton", "pina", "sandia", "uva", "melon", "frambuesa", "granada", "pomelo"];

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

function toggleElement() {
    const element = document.getElementById('message-container');
    element.classList.toggle('show');
}
  

function displayFruit(){
    if(indiceFruta < fruits.length){
        currentFruit = fruits[indiceFruta];
        document.getElementById("fruit-image").src = "frutas/" + currentFruit + ".svg";
        console.log(fruits[indiceFruta])
    }
    else displayRandomFruit()
}
function displayRandomFruit() {
    let randomIndex;
  
    do {    
      randomIndex = Math.floor(Math.random() * fruits.length);
    } while (arrayLastFruitsAppeared.includes(randomIndex));
  
    arrayLastFruitsAppeared.push(randomIndex);
  
    if (arrayLastFruitsAppeared.length > 14) {
      arrayLastFruitsAppeared.shift();
    }
  
    currentFruit = fruits[randomIndex];

    console.log(arrayLastFruitsAppeared)
  
    document.getElementById("fruit-image").src = "frutas/" + currentFruit + ".svg";
  }
  

function checkAnswer()
{
    let userAnswer = input.value.toLocaleLowerCase();
    userAnswer = removeAccents(userAnswer);

    if (userAnswer === currentFruit) 
    {
        toggleElement();

        let secs = 0;

        const id = setInterval(function()
        { 
            ++secs;

            if(secs > 0)
            {
                respuesta.value = ''
                displayFruit();
                clearInterval(id);
                toggleElement();
            }
            
        }, 1000);

        indiceFruta++;
        
    } 
}

const form = document.getElementById('formulario')
form.addEventListener ('input', (e)=>{
    e.preventDefault();
    checkAnswer();
})
form.addEventListener('submit', (e) => e.preventDefault() )

const input = document.getElementById('respuesta');

document.addEventListener('click', function(event) {
  // Verificar si el clic se realizó fuera del input
  if (event.target !== input) {
    // Volver a enfocar el input
    input.focus();
  }
});


let indiceFruta = 0;
let arrayLastFruitsAppeared = [];



window.onload = ()=>{
    displayFruit()
    input.focus()
}
