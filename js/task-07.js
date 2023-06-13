const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontSizeControl.addEventListener("input", updateFontSize);
textElement.style.fontSize = fontSizeControl.value + "px";

function updateFontSize() {
  const fontSize = fontSizeControl.value + "px";
  textElement.style.fontSize = fontSize;
}
