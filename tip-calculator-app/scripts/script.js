// inputs
const billInput = document.querySelector("#input-bill");
const peopleInput = document.querySelector("#input-people");
const tipCustomInput = document.querySelector("#custom-percent");
const tipCustomLabel = document.querySelector(".custom");

const tipAmountEl = document.querySelector("#tip-amount");
const totalAmountEl = document.querySelector("#total-amount");

const resetButton = document.querySelector('button[type="reset"]');

tipCustomLabel.addEventListener("focus", (e) => {
  console.log("TODO: Select all texts");
});

tipCustomLabel.addEventListener("input", (e) => {
  let value = 0;
  if (validateCustomTip()) {
    value = tipCustomLabel.innerText;
  }
  tipCustomInput.value = value;
});

function validateCustomTip() {
  const innerText = tipCustomLabel.innerText;

  if (innerText.length > 4) {
    tipCustomLabel.innerText = innerText.slice(0, 5);
  }
  if (/\n/g.test(innerText)) {
    tipCustomLabel.innerText = innerText.replaceAll("\n", "");
  }
  if (!(innerText && /^\d*\.?\d*$/g.test(innerText))) {
    tipCustomLabel.classList.add("custom--invalid");
    return false;
  }
  if (!(innerText > 0 && innerText <= 100)) {
    tipCustomLabel.classList.add("custom--invalid");
    return false;
  }

  tipCustomLabel.classList.remove("custom--invalid");
  return true;
}

[billInput, peopleInput].map((input) => {
  input.addEventListener("input", (e) => calculateTip());
});

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
  const tip = selectedTipPercent.value / 100 * total;

  tipAmountEl.innerText = "$" + tip.toFixed(2);
  totalAmountEl.innerText = "$" + total.toFixed(2);
}


function reset() {
  tipAmountEl.innerText = "$0.00";
  totalAmountEl.innerText = "$0.00";
}

resetButton.addEventListener("click", (e) => reset());

const labels = document.querySelectorAll(".calculator__input-tip label:not(:first-child)");
labels.forEach((label) => {
  label.addEventListener("click", (e) => calculateTip());
});

tipCustomLabel.addEventListener("input", (e) => calculateTip());