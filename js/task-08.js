const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", formValidation);

function formValidation(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("Усі поля повинні бути заповнені!");
    return;
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
