// DOM SELECTORS

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const displayError = (input, message) => {
  const parent = input.parentElement;
  const errorMessage = parent.querySelector("small");

  parent.className = "input-group error";
  errorMessage.textContent = message;
};

const displaySuccess = (input) => {
  const parent = input.parentElement;
  const message = parent.querySelector("small");

  parent.className = "input-group success";
  message.textContent = "";
};

const isEmail = (email) => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (username.value === "") {
    displayError(username, "Username cannot be blank");
  } else {
    displaySuccess(username);
  }

  if (email.value === "") {
    displayError(email, "Email cannot be blank");
  } else if (!isEmail(email.value)) {
    displayError(email, "Enter a valid email");
  } else {
    displaySuccess(email);
  }

  if (password.value === "") {
    displayError(password, "Password cannot be blank");
  } else if (password.value.length < 6) {
    displayError(password, "Password must be at least 6 characters long");
  } else {
    displaySuccess(password);
  }

  if (password2.value === "") {
    displayError(password2, "Password cannot be blank");
  } else if (password2.value !== password.value) {
    displayError(password2, "Passwords don't match");
  } else {
    displaySuccess(password2);
  }
});
