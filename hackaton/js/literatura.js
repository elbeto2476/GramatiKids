const lecturas = [
  {
    titulo: "🌟 La estrella perdida",
    texto: "Una vez había una estrella que brillaba más que todas. Un día, bajó a la Tierra para ver los sueños de los niños, pero se perdió entre todos ellos. Una niña llamada Laura la ayudó a volver al cielo, y desde entonces, brilló solo para ella.",
    imagen: "../img/estrella.jpg"
  },
  {
    titulo: "🦉 El búho sabio",
    texto: "En un bosque tranquilo vivía un búho que escuchaba los problemas de los animales. Con paciencia y sabiduría, les enseñaba a resolverlos con respeto y empatía.",
    imagen: "../img/buho.jpg"
  },
  {
    titulo: "🐠 El pez que quería volar",
    texto: "Un pez soñaba con volar como los pájaros. Aunque no tenía alas, aprendió a saltar tan alto que tocaba el cielo. Descubrió que los sueños se alcanzan de muchas formas.",
    imagen: "../img/pez.jpg"
  }
];

let actual = 0;

function mostrarLectura(idx) {
  document.getElementById('lectura-titulo').textContent = lecturas[idx].titulo;
  document.getElementById('lectura-texto').textContent = lecturas[idx].texto;
  document.getElementById('lectura-imagen').style.backgroundImage = `url('${lecturas[idx].imagen}')`;
}

document.getElementById('siguiente-btn').onclick = function () {
  actual = (actual + 1) % lecturas.length;
  mostrarLectura(actual);
};

mostrarLectura(actual);
