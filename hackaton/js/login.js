document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const savedUser = localStorage.getItem('educaapp_user');
  const savedPass = localStorage.getItem('educaapp_pass');

  if (username === savedUser && password === savedPass) {
    window.location.href = 'dashboar.html';
  } else {
    document.getElementById('errorMsg').textContent = 'Usuario o contraseña incorrectos.';
  }
});