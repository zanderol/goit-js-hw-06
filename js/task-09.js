function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const colorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

colorBtn.addEventListener("click", () => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorName.innerHTML = color;
});
