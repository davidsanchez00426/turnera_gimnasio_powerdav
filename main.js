// Variables y const
let usuario = prompt("¿Cuál es tu nombre?");
const saludo = "Bienvenido/a";

alert(saludo + " " + usuario);

// Array con turnos
let turnos = [
  { dia: "lunes", hora: "10:00", disponible: true },
  { dia: "martes", hora: "15:00", disponible: false },
  { dia: "miércoles", hora: "18:00", disponible: true },
  { dia: "jueves", hora: "09:00", disponible: true },
  { dia: "viernes", hora: "14:00", disponible: false }
];

// Función: mostrar todos los turnos
function mostrarTurnos(lista, titulo) {
  console.log("---- " + titulo + " ----");
  for (let i = 0; i < lista.length; i++) {
    console.log(lista[i].dia + " " + lista[i].hora + " -> " + (lista[i].disponible ? "Disponible" : "Ocupado"));
  }
}

// Función: buscar un turno
function buscarTurno(lista, dia, hora) {
  let encontrado = false;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].dia === dia && lista[i].hora === hora) {
      encontrado = true;
      if (lista[i].disponible) {
        alert("El turno de " + dia + " a las " + hora + " está DISPONIBLE ✅");
      } else {
        alert("El turno de " + dia + " a las " + hora + " está OCUPADO ❌");
      }
      break;
    }
  }
  if (!encontrado) {
    alert("Ese turno no existe.");
  }
}

// Función: reservar un turno
function reservarTurno(lista, dia, hora) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].dia === dia && lista[i].hora === hora) {
      if (lista[i].disponible) {
        lista[i].disponible = false;
        alert("Turno reservado con éxito 🎉");
      } else {
        alert("Ese turno ya estaba ocupado.");
      }
      return; // salir después de encontrarlo
    }
  }
  alert("No se encontró el turno para reservar.");
}

// Mostrar turnos iniciales
mostrarTurnos(turnos, "Turnos iniciales");

// WHILE: permitir consultas hasta que el usuario escriba "salir"
let seguir = true;
while (seguir) {
  let diaIngresado = prompt("Escribe un día (lunes, martes, etc) o escribe 'salir' para terminar:");
  if (diaIngresado === null) { // si el usuario cancela
    alert("Operación cancelada. Hasta luego.");
    break;
  }

  if (diaIngresado.toLowerCase() === "salir") {
    seguir = false;
    alert("Gracias por usar la turnera 👋");
    break;
  }

  let horaIngresada = prompt("Escribe una hora (ej: 10:00, 15:00, 18:00):");
  if (horaIngresada === null) {
    alert("No ingresaste hora. Volviendo al menú.");
    continue;
  }

  buscarTurno(turnos, diaIngresado, horaIngresada);

  let decision = prompt("¿Quieres reservar este turno? (si/no):");
  if (decision && decision.toLowerCase() === "si") {
    reservarTurno(turnos, diaIngresado, horaIngresada);
  }

  mostrarTurnos(turnos, "Turnos actualizados");
}

console.log("Programa terminado.");