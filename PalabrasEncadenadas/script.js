import { diccionario } from "./diccionario.js";

function checkWord(word) {
  return diccionario.includes(word);
}

function palabraAleatoria() {
  return diccionario[Math.floor(Math.random() * diccionario.length)];
}

let currentWord = palabraAleatoria();
document.getElementById("current-word").innerHTML = currentWord;
let wordsList = "";
wordsList += currentWord + " ";
document.getElementById("words-list").innerHTML = wordsList;

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let userWord = document.getElementById("user-word").value;
    if (userWord.startsWith(currentWord.slice(-1))) {
        if (checkWord(userWord)){
            document.getElementById("result").innerHTML = "La palabra es correcta!";
            currentWord = userWord;
            document.getElementById("current-word").innerHTML = currentWord;
            wordsList += currentWord + " ";
            document.getElementById("words-list").innerHTML = wordsList;      
        }
        else{
            document.getElementById("result").innerHTML = "La palabra no está en el diccionario";
        }
    } else {
      document.getElementById("result").innerHTML = "La letra inicial no es válida";
    }
    formulario.reset();
})