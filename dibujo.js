let tablero = document.getElementById('tablero')
let lienzo = tablero.getContext('2d')

// lienzo.beginPath() //inicializo el dibujo
// lienzo.strokeStyle = "#7DF527"
// lienzo.moveTo(0, 0) // punto A coordenadas
// lienzo.lineTo (30,300) // punt B coordenadas
// lienzo.stroke()
// lienzo.closePath()

function dibujarLineas(color, x1,y1,x2,y2){
    lienzo.beginPath() //inicializo el dibujo
    lienzo.strokeStyle = color
    
    lienzo.moveTo(x1, y1) // punto A coordenadas
    lienzo.lineTo (x2, y2) // punt B coordenadas
    
    lienzo.stroke()
    lienzo.closePath()
}

for (let y = 0; y < 300 ; y+=10){   
    dibujarLineas("#07ff03", 0, y, 300 - y, 0)
    dibujarLineas("#ff0303", 300, y, 300 - y, 300)
    dibujarLineas("#9415c6", 0, y, y + 10, 300)
    dibujarLineas("#156dc6", 300, y, y + 10, 0)
}