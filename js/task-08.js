const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
  event.preventDefault();
  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (isFormValid(emailInput, passwordInput)) {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);
    resetForm();
  } else {
    alert("Please fill in all fields.");
  }
}

function isFormValid(...inputs) {
  for (let input of inputs) {
    if (input.value.trim() === "") {
      return false;
    }
  }
  return true;
}

function resetForm() {
  loginForm.reset();
}
