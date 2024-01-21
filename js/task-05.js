const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value.trim();
  }
});
