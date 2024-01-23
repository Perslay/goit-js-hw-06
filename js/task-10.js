const numberInput = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", () =>
  createBoxes(Number(numberInput.value))
);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxes = [];

  if (amount >= numberInput.min && amount <= numberInput.max) {
    for (let i = 0; i < numberInput.value; i++) {
      const box = document.createElement("div");
      const randomColor = getRandomHexColor();

      box.style.backgroundColor = randomColor;
      box.style.height = `${30 + 10 * i}px`;
      box.style.width = `${30 + 10 * i}px`;
      boxes.push(box);
    }
    boxesContainer.append(...boxes);
  } else {
    alert("Enter a number from 1 to 100");
  }

  numberInput.value = "";
}

function destroyBoxes() {
  boxesContainer.textContent = "";
}
