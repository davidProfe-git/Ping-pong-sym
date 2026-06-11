let canvas = document.getElementById("canvas");
let tablero = canvas.getContext("2d");
let pelota = { x: 100, y: 500 };
tablero.fillStyle = "white";

//aca hacemos el circulo
tablero.arc(90, 65, 10, 0, Math.PI * 2);
tablero.fill();
dibujarlinea();
addEventListener;

function dibujarlinea() {
  for (i = 0; i <= 500; i = i + 15) {
    tablero.fillRect(347.5, i, 5, 10);
  }
}

mueveRaqueta();

let RaquetaY = 150;

function mueveRaqueta() {
  document.addEventListener("keydown", function (tecla) {
    if (tecla.key == "ArrowUp") {
      RaquetaY = RaquetaY - 5;
      dibujarRaqueta();
      dibujarlinea();
      tablero.fillRect(655, 25, 20, 100);
    }
  });

  document.addEventListener("keydown", function (tecla) {
    if (tecla.key == "ArrowDown") {
      RaquetaY = RaquetaY + 5;
      dibujarRaqueta();
      dibujarlinea();
      tablero.fillRect(655, 25, 20, 100);
    }
  });
}

function dibujarRaqueta() {
  tablero.clearRect(0, 0, 700, 500); //deja en blanco todo
  if (RaquetaY < 0) {
    RaquetaY = 0;
  }
  if (RaquetaY > 400) {
    RaquetaY = 400;
  }
  tablero.fillRect(25, RaquetaY, 20, 100); //pinta la raqueta
}

function dibujarPelota() {
  tablero.clearRect(0, 0, 700, 400);
  tablero.beginPath();
  pelota.x = pelota.x + 5;
  pelota.y = pelota.y - 7;
  tablero.arc(pelota.x, pelota.y, 10, 0, Math.PI * 2);
  tablero.fill();
}
