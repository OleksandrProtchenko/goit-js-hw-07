const inputEmail = document.querySelector('input[type="email"]');
const inputPassword = document.querySelector('input[type="password"]');
const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = inputEmail.value.trim();
  const password = inputPassword.value.trim();
  const formData = new FormData(form);
  const data = {};

  if (!validateInputFields(email, password)) {
    return;
  }

  formData.forEach((value, name) => {
    data[name] = value.trim();
  });

  console.log(data);
  form.reset();
}

function validateInputFields(email, password) {
  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return false;
  } else if (email.includes(" ") || password.includes(" ")) {
    alert("Email and password must not contain spaces");
    return false;
  }
  return true;
}
