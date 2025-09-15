const inputMonto = document.getElementById("monto");
const tipo = document.getElementById("tipo");
const agregarBtn = document.getElementById("agregar");
const lista = document.getElementById("lista");
const totalIngresos = document.getElementById("total-ingresos");
const totalGastos = document.getElementById("total-gastos");
const balance = document.getElementById("balance");
const fraseResumen = document.getElementById("frase-resumen");
const fraseFooter = document.getElementById("frase-footer");
const imprimirBtn = document.getElementById("imprimir");

let ingresos = 0;
let gastos = 0;

// --- Frases motivacionales
const frases = [
  "Cada peso cuenta: cuida tu dinero, cuida tu futuro.",
  "Ahorra hoy para disfrutar mañana.",
  "Tu esfuerzo se convierte en prosperidad.",
  "El dinero bien cuidado es tranquilidad asegurada.",
  "Save today, shine tomorrow ✨",
  "Small savings, big dreams 🌸",
  "El dinero no da la felicidad, pero la organiza ⭐",
  "Controla tus gastos y controlarás tus sueños 💖",
  "¡Vas muy bien!",
  "Sigue cuidando tu dinero ✨",
  "Un paso más hacia tus metas 💖",
  "Pequeños ahorros hacen grandes logros ⭐",
  "Cada decisión cuenta 🌸",
  "Lo que ahorras hoy, lo agradeces mañana.",
  "Disciplina hoy, libertad mañana 💎"
];

// Frases aleatorias
fraseResumen.textContent = frases[Math.floor(Math.random() * frases.length)];
fraseFooter.textContent = frases[Math.floor(Math.random() * frases.length)];

// --- Formatear monto automáticamente (Colombia)
inputMonto.addEventListener("input", (e) => {
  let valor = e.target.value.replace(/\./g, ""); // quitar puntos
  if (!isNaN(valor) && valor !== "") {
    e.target.value = parseInt(valor).toLocaleString("es-CO");
  }
});

// --- Agregar movimiento
agregarBtn.addEventListener("click", () => {
  let valor = inputMonto.value.replace(/\./g, "");
  if (valor === "" || isNaN(valor)) return;

  valor = parseInt(valor);
  const li = document.createElement("li");

  if (tipo.value === "ingreso") {
    ingresos += valor;
    li.textContent = "+ " + valor.toLocaleString("es-CO");
    li.classList.add("ingreso");
  } else {
    gastos += valor;
    li.textContent = "- " + valor.toLocaleString("es-CO");
    li.classList.add("gasto");
  }
  lista.appendChild(li);
  actualizarResumen();
  inputMonto.value = "";
});

// --- Actualizar resumen
function actualizarResumen() {
  totalIngresos.textContent = ingresos.toLocaleString("es-CO");
  totalGastos.textContent = gastos.toLocaleString("es-CO");
  balance.textContent = (ingresos - gastos).toLocaleString("es-CO");
}

// --- Imprimir resumen + historial
imprimirBtn.addEventListener("click", () => {
  window.print();
});
