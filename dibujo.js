let tablero = document.getElementById('tablero')
let lienzo = tablero.getContext('2d')

// lienzo.beginPath() //inicializo el dibujo
// lienzo.strokeStyle = "#7DF527"
// lienzo.moveTo(0, 0) // punto A coordenadas
// lienzo.lineTo (30,300) // punt B coordenadas
// lienzo.stroke()
// lienzo.closePath()

for (let y = 0; y < 300 ; y+=10){

    lienzo.beginPath() //inicializo el dibujo
    lienzo.strokeStyle = "#00ffc8"
    
    lienzo.moveTo(0, y) // punto A coordenadas
    lienzo.lineTo (300 - y, 0) // punt B coordenadas
    
    lienzo.moveTo(300, y) // punto A coordenadas
    lienzo.lineTo (300 - y, 300) // punt B coordenadas
    
    lienzo.moveTo(0, y) // punto A coordenadas
    lienzo.lineTo (y+10,300) // punt B coordenadas
    
    lienzo.moveTo(300, y) // punto A coordenadas
    lienzo.lineTo (y+10,0) // punt B coordenadas

    lienzo.stroke()
    lienzo.closePath()
}
