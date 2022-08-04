// inputs
const billInput = document.querySelector("#input-bill");
const peopleInput = document.querySelector("#input-people");

const tipAmountEl = document.querySelector("#tip-amount");
const totalAmountEl = document.querySelector("#total-amount");

const resetButton = document.querySelector("button[type='reset']");

function calculateTip() {
  const tipPercentInput = document.querySelector('input[name="tip"]:checked');

  const percent = tipPercentInput ? tipPercentInput.value : "";
  const [bill, people] = [billInput, peopleInput].map((input) => input.value);

  if ([bill, people, percent].find((e) => e > 0) !== undefined) {
    resetButton.removeAttribute("disabled");
  } else {
    resetButton.setAttribute("disabled", "");
  }

  if ([bill, people, percent].find((e) => e <= 0) !== undefined) return;

  const tipPerPeople = ((percent / 100) * bill) / people;
  const totalPerPeople = bill / people + tipPerPeople;

  tipAmountEl.innerText = "$" + tipPerPeople.toFixed(2);
  totalAmountEl.innerText = "$" + totalPerPeople.toFixed(2);
}

function resetAll() {
  tipAmountEl.innerText = "$0.00";
  totalAmountEl.innerText = "$0.00";

  setTimeout(() => {
    resetButton.setAttribute("disabled", true);
  }, 10);
}

function updateValue(event) {
  event.target.control.value = event.target.innerText;
}

function toggleText(event) {
  const text = event.target.innerText;
  if (!/^\d*\.?\d*$/g.test(text)) {
    event.target.innerText = "";
  }
  if (event.type == "focusout" && !text) {
    event.target.innerText = "Custom";
  }
}

function inputOnlyNumber(event) {
  const text = event.target.innerText + event.key;
  if (/^\d*\.?\d*$/g.test(text) && text.length <= 5) {
    return text < 100;
  } else {
    return false;
  }
}

function selectRadio(event) {
  if (event.code == "Enter" || event.code == "Space") {
    event.target.control.checked = true;
  }
}

function changeErrorState(event) {
  let state = event.target.value < 0 ? "negative" : "zero";
  event.target.parentElement.querySelector(".error-msg span").innerText = state;
}
