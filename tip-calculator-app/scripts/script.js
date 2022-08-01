// inputs
const billInput = document.querySelector("#input-bill");
const peopleInput = document.querySelector("#input-people");

const tipAmountEl = document.querySelector("#tip-amount");
const totalAmountEl = document.querySelector("#total-amount");


function calculateTip() {
  const selectedTipPercent = document.querySelector(
    'input[name="tip"]:checked'
  );

  if (!selectedTipPercent) return;

  const empty = [billInput, peopleInput, selectedTipPercent].find(
    (input) => input.value <= 0
  );

  if (empty) return;

  const total = billInput.value / peopleInput.value;
  const tip = (selectedTipPercent.value / 100) * total;

  tipAmountEl.innerText = "$" + tip.toFixed(2);
  totalAmountEl.innerText = "$" + total.toFixed(2);
}

function resetAll() {
  tipAmountEl.innerText = "$0.00";
  totalAmountEl.innerText = "$0.00";
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