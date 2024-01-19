const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", changeOutput);

function changeOutput() {
  const inputText = input.value;
  const outputText = inputText.trim();
  output.textContent = outputText;
}
