const input = document.querySelector("input#font-size-control");
const span = document.querySelector("span#text");

function changeFontSize() {
  span.style.fontSize = input.value + "px";
}

changeFontSize();

input.addEventListener("input", changeFontSize);
