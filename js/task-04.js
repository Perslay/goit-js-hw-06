const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const value = document.querySelector("#value");
let counterValue = 0;

function increase() {
  counterValue++;
  value.innerHTML = counterValue;
}

function decrease() {
  counterValue--;
  value.innerHTML = counterValue;
}

incrementButton.addEventListener("click", increase);
decrementButton.addEventListener("click", decrease);
