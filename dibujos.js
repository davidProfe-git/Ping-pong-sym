let tablero = document.getElementById("tablero");
let lienzo = tablero.getContext("2d");

for (i = 0; i < 300; i += 10) {
  lienzo.beginPath(); //inizia el dibujo
  lienzo.strokeStyle = "Red"; //le doy color al trazo
  lienzo.moveTo(0, i); //coordenadas de el linzo
  lienzo.lineTo(i + 10, 300); //hasta donde va el trazo
  lienzo.stroke();
  lienzo.closePath();
} //abajo izquierda

for (i = 0; i < 300; i += 10) {
  lienzo.beginPath(); //inizia el dibujo
  lienzo.strokeStyle = "Blue"; //le doy color al trazo
  lienzo.moveTo(i, 0); //coordenadas de el linzo
  lienzo.lineTo(300, i + 10); //hasta donde va el trazo
  lienzo.stroke();
  lienzo.closePath();
} // arriba derecha

for (i = 0; i < 300; i += 10) {
  lienzo.beginPath(); //inizia el dibujo
  lienzo.strokeStyle = "#77df62"; //le doy color al trazo
  lienzo.moveTo(300 - i, 0); //coordenadas de el linzo
  lienzo.lineTo(0, 0 + i); //hasta donde va el trazo
  lienzo.stroke();
  lienzo.closePath();
} // arriba izquierda

for (i = 0; i < 300; i += 10) {
  lienzo.beginPath(); //inizia el dibujo
  lienzo.strokeStyle = "#ce1db6"; //le doy color al trazo
  lienzo.moveTo(300 - i, 300); //coordenadas de el linzo
  lienzo.lineTo(300, 0 + i); //hasta donde va el trazo
  lienzo.stroke();
  lienzo.closePath();
} // arriba izquierda
