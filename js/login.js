let loginForm = document.getElementById("login-Form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let username = document.getElementById("username-login");//corrected based on sign in form
  let password = document.getElementById("password-login");

  if (username.value === "" || password.value === "") {
    alert("Please enter a username and password");
  } else {
    // corrected the fetch to use t endpoint for user login based on userRoutes
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: username.value, password: password.value })
      });
      //removed password from the console log for security
      console.log(
        `This form has a username of ${username.value}`
      );
      if (response.ok) {
        window.location.href = '/'; // Redirect to homepage upon successful login
      } else {
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login');
    }
  }
});
