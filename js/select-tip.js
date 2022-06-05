const buttons = document.querySelectorAll(".tip-item");
const custom = document.querySelector(".tip-custom");

let selectedButtom;
let tipPercentual = 0;

for (i = 0; i < buttons.length; i++) {
  item = buttons[i];
  item.addEventListener("click", addEvent);
}

custom.addEventListener("click", function () {
  const other = document.querySelector(".buttom-selected");
  const verification = document.querySelectorAll(".buttom-selected");
  if (!verification.length == 0) {
    other.classList.remove("buttom-selected");
  }
  custom.classList.toggle("buttom-selected");
});

custom.addEventListener("focusout", function () {
  selectedButtom = document.querySelector(".buttom-selected");
  buttomContent = selectedButtom.value;
  tipPercentual = parseFloat(buttomContent);
  return tipPercentual;
});

function addEvent() {
  const other = document.querySelector(".buttom-selected");
  const verification = document.querySelectorAll(".buttom-selected");
  if (!verification.length == 0) {
    other.classList.remove("buttom-selected");
  }
  this.classList.toggle("buttom-selected");
  selectedButtom = document.querySelector(".buttom-selected");
  buttomContent = selectedButtom.textContent;
  tipPercentual = parseFloat(buttomContent);
  return tipPercentual;
}
