const inputElement = document.getElementById("validation-input");
inputElement.addEventListener("blur", validateInput);

function validateInput() {
  const inputValue = inputElement.value.trim();
  const expectedLength = parseInt(inputElement.getAttribute("data-length"));
  const isValid = inputValue.length === expectedLength;

  inputElement.classList.toggle("valid", isValid);
  inputElement.classList.toggle("invalid", !isValid);
}
