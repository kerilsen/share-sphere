let logoutButton = document.getElementById("logout");

logoutButton.addEventListener("click", async () => {
  try {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.href = '/'; // Redirect to homepage upon successful logout
    } else {
      alert('Logout failed');
    }
  } catch (error) {
    console.error('Logout error:', error);
    alert('An error occurred during logout');
  }
});
