const numberInput = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes() {
  for (let i = 0; i < numberInput.value; i++) {
    const box = document.createElement("div");
    const randomColor = getRandomHexColor();

    box.style.backgroundColor = randomColor;
    box.style.height = `${30 + 10 * i}px`;
    box.style.width = `${30 + 10 * i}px`;
    boxes.append(box);
  }

  // if (numberInput.value >= 1 && numberInput.value <= 100) {
  //   for (let i = 0; i < amount; i++) {
  //     const size = 30 + i * 10;
  //     const box = document.createElement("div");

  //     box.style.width = size + "px";
  //     box.style.height = size + "px";
  //     box.style.backgroundColor = getRandomHexColor();

  //     boxes.append(box);
  //   }
  // }
}

function destroyBoxes() {
  boxes.textContent = "";
}
