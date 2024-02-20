let loginForm = document.getElementById("login-Form");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("email-login");//corrected based on sign in form
  let password = document.getElementById("password-login");

  if (email.value === "" || password.value === "") {
    alert("Please enter a email and password");
  } else {
    // corrected the fetch to use t endpoint for user login based on userRoutes
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email.value, password: password.value })
      });
      //removed password from the console log for security
      console.log(
        `This form has a email of ${email.value}`
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
