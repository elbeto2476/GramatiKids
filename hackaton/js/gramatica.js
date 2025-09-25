const actividades = [
  {
    tipo: "identificacion",
    titulo: "Identificación de palabras",
    texto: "Subraya los sustantivos, verbos y adjetivos en el siguiente texto:<br><br><i>El perro corre rápido por el jardín verde.</i>",
    respuesta: {
      sustantivos: ["perro", "jardín"],
      verbos: ["corre"],
      adjetivos: ["rápido", "verde"]
    }
  },
  {
    tipo: "correccion",
    titulo: "Corrección de oraciones",
    texto: "Corrige la siguiente frase con errores:<br><br><i>Los niño juega en el parque.</i>",
    respuesta: "Los niños juegan en el parque."
  },
  {
    tipo: "ordenar",
    titulo: "Ordena las palabras",
    texto: "Organiza las siguientes palabras para formar una oración correcta:<br><br><b>feliz / muy / estoy / hoy</b>",
    respuesta: "Hoy estoy muy feliz"
  },
  {
    tipo: "transformacion",
    titulo: "Transformación de oraciones",
    texto: "Cambia la siguiente oración de presente a pasado:<br><br><i>Yo como una manzana.</i>",
    respuesta: "Yo comí una manzana."
  }
];

let actual = 0;

function mostrarActividad(idx) {
  const act = actividades[idx];
  document.getElementById('gramatica-titulo').textContent = act.titulo;
  document.getElementById('gramatica-texto').innerHTML = act.texto;

  // limpiar área de inputs anteriores
  const cont = document.getElementById('actividad-extra');
  cont.innerHTML = "";

  // Mostrar según tipo
  if (act.tipo === "identificacion") {
    cont.innerHTML = `<p><b>Escribe los sustantivos, verbos y adjetivos separados por coma:</b></p>
      <input id="sustantivos" placeholder="Sustantivos"><br>
      <input id="verbos" placeholder="Verbos"><br>
      <input id="adjetivos" placeholder="Adjetivos"><br>`;
  } else if (act.tipo === "correccion" || act.tipo === "ordenar" || act.tipo === "transformacion") {
    cont.innerHTML = `<input id="respuesta-input" placeholder="Escribe tu respuesta" style="width:80%; text-align:center;">`;
  }
}

function verificar() {
  const act = actividades[actual];
  let correcto = false;

  if (act.tipo === "identificacion") {
    const s = document.getElementById('sustantivos').value.toLowerCase().split(",").map(x=>x.trim());
    const v = document.getElementById('verbos').value.toLowerCase().split(",").map(x=>x.trim());
    const a = document.getElementById('adjetivos').value.toLowerCase().split(",").map(x=>x.trim());

    correcto = JSON.stringify(s.sort()) === JSON.stringify(act.respuesta.sustantivos.sort()) &&
               JSON.stringify(v.sort()) === JSON.stringify(act.respuesta.verbos.sort()) &&
               JSON.stringify(a.sort()) === JSON.stringify(act.respuesta.adjetivos.sort());

  } else {
    const r = document.getElementById('respuesta-input').value.trim();
    correcto = r.toLowerCase() === act.respuesta.toLowerCase();
  }

  if (correcto) {
    actual++;
    if (actual < actividades.length) {
      mostrarActividad(actual);
    } else {
      document.getElementById('gramatica-container').innerHTML = "<h3>¡Felicidades! Completaste todas las actividades.</h3>";
    }
  } else {
    alert("Intenta de nuevo.");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Agregar botón de verificación
  const btn = document.createElement('button');
  btn.textContent = "Verificar";
  btn.onclick = verificar;
  document.getElementById('gramatica-container').appendChild(btn);

  // Área extra para inputs dinámicos
  const extra = document.createElement('div');
  extra.id = "actividad-extra";
  document.getElementById('gramatica-container').appendChild(extra);

  mostrarActividad(actual);
});
