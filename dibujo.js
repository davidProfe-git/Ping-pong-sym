let tablero = document.getElementById('tablero')
let lienzo = tablero.getContext('2d')

lienzo.beginPath() //inicializo el dibujo
lienzo.strokeStyle = "#7DF527"
lienzo.moveTo(0, 0) // punto A coordenadas
lienzo.lineTo (304,304) // punt B coordenadas
lienzo.stroke()
lienzo.closePath()