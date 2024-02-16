
let loginForm = document.getElementById("login-Form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let username = document.getElementById("email-login");
  let password = document.getElementById("password-login");

  if (username.value == "" || password.value == "") {
    alert("Please enter a username and password");
  } else {

  const saveUser = (userData) =>
  fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  });
    console.log(
      `This form has a username of ${username.value} and password of ${password.value}`
    );

    username.value = "";
    password.value = "";
  }
});