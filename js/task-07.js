const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

input.addEventListener("input", changeFontSize);

function changeFontSize() {
  span.style.fontSize = input.value + "px";
}
