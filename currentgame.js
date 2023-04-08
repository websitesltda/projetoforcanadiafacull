import {Word} from "./Word.js";

//New game
const newGameButton = document.querySelector("#new-game");
const themeSelector = document.querySelector("#theme-selector");

newGameButton.addEventListener("click", () => {themeSelector.classList.toggle("visible")})

const ListaCognitivas = [
    "linguagem",
    "fala",
    "pensamento",
    "dialago",
    "sinapse-neuronal"
];


let themeButtons = document.querySelectorAll(".theme");

const currentTheme = document.querySelector("#current-theme");

let currentWord;

const keys = document.querySelectorAll(".key");

themeButtons.forEach(function(theme){
    let themeList = eval(theme.dataset.theme);
    theme.addEventListener("click", function(){
        currentTheme.innerHTML = theme.innerHTML
        let newWord = themeList[Math.floor(Math.random() * themeList.length)];
        currentWord = new Word(newWord.toUpperCase());
        themeSelector.classList.remove("visible");
        alertBox.classList.remove("visible");
        gameKeyboard.classList.add("visible");
        keys.forEach(function(key) {
            key.classList.remove("pressed");
        })
    })
})

keys.forEach(function(key) {
    key.addEventListener("click", () => currentWord.checkCharacter(key.innerHTML, key))
})

const alertBox = document.querySelector("#alert-box");
const gameKeyboard = document.querySelector("#keyboard-container")

export function gameAlert(alertText) {
    alertBox.innerHTML = alertText;
    alertBox.classList.add("visible");
    gameKeyboard.classList.remove("visible");
}

export {currentWord, alertBox, gameKeyboard};