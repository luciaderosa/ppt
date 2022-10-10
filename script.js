//opciones = ["piedra", "papel", "tijera"];
//opciones = [0, 1, 2];
/*
00 11 22 empate
primer caracter usuario 2do maquina
01 piedra papel - gana usuario
02 piedra tijera - pierde
10
12
20
21
*/

function usuario(eleUsuario) {
  //borrar todo lo rojo
  allWhite();
  let eleMaquina = aleatorio(0, 2);
  let eleccion = eleUsuario + eleMaquina;

  switch (eleccion) {
    case "00":
      showEmpate("Piedra");
      break;
    case "11":
      showEmpate("Papel");
      break;
    case "22":
      showEmpate("Tijera");
      break;
    case "01":
      showPierde("Piedra", "Papel");
      break;
    case "02":
      showGana("Piedra", "Tijera");
      break;
    case "10":
      showGana("Papel", "Piedra");
      break;
    case "12":
      showPierde("Papel", "Tijera");
      break;
    case "20":
      showPierde("Tijera", "Piedra");
      break;
    case "21":
      showGana("Tijera", "Papel");
      break;
    default:
      document.write("Error");
      break;
  }
  console.log(eleccion);
  document.getElementById("respuesta").style.display = "";
}
function showEmpate(elemento) {
  document.getElementById("respuesta").innerHTML = `<h1>¡Empate!</h1>`;
  marcaRojo(elemento, elemento);
}
function marcaRojo(elementoUsuario, elementoMaquina) {
  let itemu = document.getElementById(elementoUsuario);
  itemu.style.color = "red";
  let item = document.getElementById(`${elementoMaquina}M`);
  item.style.color = "red";
}
function showGana(eleUsuario, eleMaquina) {
  document.getElementById(
    "respuesta"
  ).innerHTML = `<h1 style='color:green'>¡Ganaste!</h1>`;
  marcaRojo(eleUsuario, eleMaquina);
}
function showPierde(eleUsuario, eleMaquina) {
  document.getElementById(
    "respuesta"
  ).innerHTML = `<h1 style='color:red'>¡Perdiste!</h1>`;
  marcaRojo(eleUsuario, eleMaquina);
}
function limpiaRespuesta() {
  document.getElementById("respuesta").style.display = "none";
  allWhite();
}
function aleatorio(minimo, maximo) {
  var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
  return numero;
}
function allWhite() {
  let items = document.getElementsByTagName("button");
  for (let item of items) {
    item.style.color = "white";
  }
}
