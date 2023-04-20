<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>Login</title>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.10.0/firebase-auth.js"></script>
</head>
<body>
  <h1>Login</h1>
  <form id="loginForm">
    <label for="email">Email:</label>
    <input type="email" id="email" required>
    <br><br>
    <label for="password">Password:</label>
    <input type="password" id="password" required>
    <br><br>
    <button type="submit">Login</button>
  </form>
  <script src="login.js"></script>
</body>
</html>
