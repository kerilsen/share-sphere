const express = require('express');
const router = express.Router();

// Setting a session variable
router.get('/setSession', (req, res) => {
  req.session.user = { username: 'exampleUser' };
  res.send('Session variable set');
});

// Accessing a session variable
router.get('/getSession', (req, res) => {
  const username = req.session.user.username;
  res.send('Username: ' + username);
});

module.exports = router;