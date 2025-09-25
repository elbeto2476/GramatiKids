document.getElementById('registroForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('newUsername').value.trim();
  const email = document.getElementById('newemail').value.trim();
  const age = document.getElementById('newage').value.trim();

  if (username && email && age ) {
   localStorage.setItem('educaapp_user', username);
localStorage.setItem('educaapp_email', email);
localStorage.setItem('educaapp_age', age);
  } else {
    document.getElementById('registroError').textContent = 'Completa todos los campos.';
  }
});