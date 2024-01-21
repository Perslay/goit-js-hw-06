const body = document.querySelector("body");
const colorName = document.querySelector("span.color");
const colorButton = document.querySelector("button.change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

colorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
});
