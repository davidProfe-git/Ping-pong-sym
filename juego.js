let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')

tablero.fillStyle = 'white'
tablero.fillRect(25,200 ,20,100)
            //  (xinicial,yinicial,ancho,alto)

tablero.fillRect(655,25,20,100)

//aca hacemos el circulo
tablero.arc(90, 65, 10, 0, Math.PI * 2)
tablero.fill()
dibujaLinea()


function dibujaLinea(){
    for(i=0;i<=400;i= i + 15){
        tablero.fillRect(347.5,i,5,10)
    }
}
