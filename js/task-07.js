const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");
fontSizeControl.addEventListener("input", updateFontSize);

function updateFontSize() {
  const fontSize = fontSizeControl.value + "px";
  textElement.style.fontSize = fontSize;
}
