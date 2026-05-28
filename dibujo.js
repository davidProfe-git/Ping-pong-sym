let tablero = document.getElementById('tablero')
let lienzo = tablero.getContext('2d')

function pintar(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath() //inicializo el dibujo
    lienzo.strokeStyle = color //le doy color al trazo
    lienzo.moveTo(xinicial,xfinal) //xinicial, yinicial
    lienzo.lineTo(xfinal,yfinal) //xfinal, yfinal
    lienzo.stroke()
    lienzo.closePath()
}

for(i=0; i<=300;i += 20){
    pintar("red",0,i,i+10,300)
    pintar("blue",300,i,i+30,0)
    pintar("black",i,0,0,300-i)
    pintar("green",300-i,300,300,0+i)
}