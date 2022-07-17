const adviceId = document.querySelector("#advice-id");
const quoteEl = document.querySelector(".card__quote")
const diceButton = document.querySelector('.card__dice-button');

const apiEndpoint = "https://api.adviceslip.com/advice";

function fetchAdvice() {
    const http = new XMLHttpRequest();
    http.open('GET', apiEndpoint, false);
    http.send(null);
    return JSON.parse(http.responseText).slip;
}

function newAdvice() {
    diceButton.classList.add("card__dice-button--rotate");
    
    const advice = fetchAdvice();

    adviceId.innerText = advice.id;
    quoteEl.innerText = advice.advice;
    diceButton.classList.remove("card__dice-button--rotate");

}

diceButton.addEventListener('click', (e) => newAdvice());

window.onload = newAdvice();