// Mostrar panel de usuario al hacer clic en el círculo
document.getElementById('userName').textContent = localStorage.getItem('educaapp_user') || '';
document.getElementById('userEmail').textContent = localStorage.getItem('educaapp_email') || '';
document.getElementById('userAge').textContent = localStorage.getItem('educaapp_age') || '';
  // Cargar datos del usuario desde localStorage
document.getElementById('userCircle').onclick = function() {
  document.getElementById('userPanelContainer').style.display = 'flex';
  document.getElementById('userName').textContent = localStorage.getItem('educaapp_user') || '';
  document.getElementById('userEmail').textContent = localStorage.getItem('educaapp_email') || '';
  document.getElementById('userAge').textContent = localStorage.getItem('educaapp_age') || '';
};


// Ocultar panel al hacer clic en "Cerrar"
document.getElementById('closePanelBtn').onclick = function() {
  document.getElementById('userPanelContainer').style.display = 'none';
};

// Agregar otra cuenta (redirige al registro)
document.getElementById('addAccountBtn').onclick = function() {
  window.location.href = 'registro.html';
};