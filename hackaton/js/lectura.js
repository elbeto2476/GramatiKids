
const lecturas = [
  {
    titulo: "El gato curioso",
    texto: "Había una vez un gato que quería saber qué había detrás de la puerta. Un día, la empujó y encontró un jardín lleno de flores y mariposas.",
    imagen: "../img/a-cat-stands-among-vibrant-flowers-in-a-garden-photo.jpg"
  },
  {
    titulo: "La rana saltarina",
    texto: "En el estanque vivía una rana que saltaba muy alto. Sus amigos la animaban y ella les enseñaba a saltar cada vez más lejos.",
    imagen: "../img/rana.jpg"
  },
  {
    titulo: "El árbol generoso",
    texto: "Un árbol daba sombra y frutos a todos los niños del parque. Ellos cuidaban sus ramas y jugaban bajo sus hojas verdes.",
    imagen: "../img/arbol.jpg"
  }
];

let actual = 0;
function mostrarLectura(idx) {
  document.getElementById('lectura-titulo').textContent = lecturas[idx].titulo;
  document.getElementById('lectura-texto').textContent = lecturas[idx].texto;
  document.getElementById('lectura-imagen').style.backgroundImage = `url('${lecturas[idx].imagen}')`;
}
document.getElementById('siguiente-btn').onclick = function() {
  actual = (actual + 1) % lecturas.length;
  mostrarLectura(actual);
};
mostrarLectura(actual);
