const adviceId = document.querySelector("#advice-id");
const quoteEl = document.querySelector(".card__quote");
const diceButton = document.querySelector(".card__dice-button");

const apiEndpoint = "https://api.adviceslip.com/advice";

function fetchAdvice() {
  return new Promise((resolve, reject) => {
    fetch(apiEndpoint, { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => resolve(data.slip));
  });
}

async function newAdvice() {
  diceButton.classList.add("card__dice-button--rotate");

  const advice = await fetchAdvice();

  adviceId.innerText = advice.id;
  quoteEl.innerText = advice.advice;
  diceButton.classList.remove("card__dice-button--rotate");
}

diceButton.addEventListener("click", (e) => newAdvice());

window.onload = newAdvice();
