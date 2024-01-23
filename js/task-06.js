const input = document.querySelector("#validation-input");

input.addEventListener("blur", validation);

function validation() {
  const inputText = input.value;
  const finalText = inputText.trim();
  const correctLength = Number(input.dataset.length);

  if (finalText.length === correctLength) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
}
