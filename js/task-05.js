const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", () => {
  if ((outputEl.textContent = inputEl.value)) {
    return inputEl.value;
  }
  return (outputEl.textContent = "Anonymous");
});
