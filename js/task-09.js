const colorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.body;

colorButton.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorSpan.textContent = color;
}

function getRandomHexColor() {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const hexColor = randomNumber.toString(16).padStart(6, "0");
  return `#${hexColor}`;
}
