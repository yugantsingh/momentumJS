"use strict";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  localStorage.setItem("userName", username);
  greeting.textContent = `Hello ${username}`;
  greeting.classList.remove("hidden");
}

const savedUserName = localStorage.getItem("userName");

if (savedUserName === null) {
  //show form
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show heading
  greeting.textContent = `Hello ${savedUserName}`;
  greeting.classList.remove("hidden");
}
