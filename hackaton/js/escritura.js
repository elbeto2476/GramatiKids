const actividades = [
   {
    titulo: "Redacta una historia sobre tu mascota",
    texto: "Escribe una breve historia sobre una aventura divertida que vivió tu mascota.",
    imagen: "../img/amigos.jpeg",
    color: "#8e44ad"
  },
  {
    titulo: "Describe tu día favorito",
    texto: "Piensa en tu día favorito y escribe cómo fue, qué hiciste y por qué te gustó tanto.",
    imagen: "../img/dia_favorito.jpg",
    color: "#e67e22"
  },
  {
    titulo: "Imagina un superhéroe",
    texto: "Crea un personaje de superhéroe y escribe cuáles son sus poderes, cómo ayuda a los demás y dónde vive.",
    imagen: "../img/superheroe.jpg",
    color: "#3498db"
  },
  {
    titulo: "Un viaje al espacio",
    texto: "Imagina que viajas al espacio. ¿Qué ves? ¿A quién conoces? ¿Cómo es tu nave?",
    imagen: "../img/espacio.jpg",
    color: "#16a085"
  },
  {
    titulo: "Un día en la selva",
    texto: "Escribe una historia sobre lo que harías si pasaras un día en la selva.",
    imagen: "../img/selva.jpg",
    color: "#27ae60"
  }
];

let actual = 0;
function mostrarActividad(idx) {
  document.getElementById('escritura-titulo').textContent = actividades[idx].titulo;
  document.getElementById('escritura-texto').textContent = actividades[idx].texto;
  document.getElementById('escritura-imagen').src = actividades[idx].imagen;
  document.getElementById('escritura-container').style.borderColor = actividades[idx].color;
}

function guardarHistoria(idx) {
  const texto = document.getElementById('historia-input').value;
  localStorage.setItem('historia_' + idx, texto);
  alert('¡Tu historia ha sido guardada!');
}

function cargarHistoria(idx) {
  return localStorage.getItem('historia_' + idx) || '';
}

document.getElementById('siguiente-escritura-btn').onclick = function() {
  guardarHistoria(actual);
  actual = (actual + 1) % actividades.length;
  mostrarActividad(actual);
};

document.getElementById('guardar-btn').onclick = function() {
  guardarHistoria(actual);
};

mostrarActividad(actual);