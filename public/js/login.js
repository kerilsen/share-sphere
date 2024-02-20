let loginForm = document.querySelector('.login-form');
const signupForm = document.querySelector('.signup-form');

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let email = document.getElementById("email_login").value.trim();//corrected based on sign in form
  let password = document.getElementById("password_login").value.trim();

  if (email === "" || password === "") {
    alert("Please enter an email and password");
  } else {
    // corrected the fetch to use t endpoint for user login based on userRoutes
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      });
      //removed password from the console log for security
      console.log(
        `This form has a email of ${email}`
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
  

signupForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const username = document.querySelector('#username').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const community_id = document.querySelector('#community_id').value.trim();

  if (name && username && email && password && community_id) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, username, email, password, community_id }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
});