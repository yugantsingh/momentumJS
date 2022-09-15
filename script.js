"use strict";

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add("hidden");
  const username = loginInput.value;
  greeting.textContent = `Hello ${username}`;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);
