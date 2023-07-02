"use strict";

let score = 0;
let currentFruit = "";
let fruits = ["manzana", "platano", "naranja", "pera", "fresa", "aguacate", "arandanos", "cereza", "coco", "kiwi", "limon", "mango", "melocoton", "pina", "sandia", "uva", "melon", "frambuesa", "granada", "pomelo"];

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

function displayFruit()
{
    let randomIndex = Math.floor(Math.random() * fruits.length);

    currentFruit = fruits[randomIndex];

    document.getElementById("fruit-image").src = "frutas/" + currentFruit + ".png";
}

function checkAnswer()
{
    let userAnswer = document.getElementById("user-answer").value.toLocaleLowerCase();
    userAnswer = removeAccents(userAnswer);

    if (userAnswer === currentFruit) 
    {
        score++;

        document.getElementById("score").innerHTML = "Puntuación: " + score;

        let acierto = document.getElementById("correcto");

        acierto.hidden = false;

        var secs = 0;

        var id = setInterval(function()
        { 
            secs++; console.log(secs);

            if(secs > 2)
            {
                clearInterval(id);

                acierto.hidden = true;
            }
            
        }, 1000);

        displayFruit();
    } 
    else 
    {
        let acierto = document.getElementById("incorrecto");

        acierto.hidden = false;

        var secs = 0;

        var id = setInterval(function()
        { 
            secs++; console.log(secs);

            if(secs > 2)
            {
                clearInterval(id);

                acierto.hidden = true;
            }

        }, 1000);
    }
}

window.onload = displayFruit()

