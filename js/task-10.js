const numberInput = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
const boxesLength = boxes.children.length;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes() {
  for (let i = 0; i < numberInput.value; i++) {
    const box = document.createElement("div");
    const randomColor = getRandomHexColor();

    box.style.backgroundColor = randomColor;
    box.style.height = `${30 + 10 * i}px`;
    box.style.width = `${30 + 10 * i}px`;
    boxes.append(box);
  }
}

function destroyBoxes() {
  boxes.textContent = "";
}
