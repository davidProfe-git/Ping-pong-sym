let canvas = document.getElementById('canvas')
const boton = document.getElementById('miBoton')
const puntaje1 = document.getElementById('score1')
const puntaje2 = document.getElementById('score2')

let jugador1 = 0
let jugador2 = 0

let tablero = canvas.getContext('2d')
var coordY = (canvas.height-100)/2
var coordY2 = (canvas.height-100)/2
tablero.fillStyle = 'white'


var pelotaX = 350
var pelotaY = 200
var radio = 10
var velX = 4
var velY = 4

function dibujaLinea(){
    for(let i = 0; i <= 400; i = i + 15){
        tablero.fillRect(347.5, i, 5, 10)
    }
}

function dibujaRaquetas(){
    tablero.fillRect(25, coordY, 20, 100)
    tablero.fillRect(655, coordY2, 20, 100)
}

function dibujaPelota(){
    tablero.beginPath()
    tablero.arc(pelotaX, pelotaY, radio, 0, Math.PI * 2)
    tablero.fill()
}

function dibujaTodo(){
    tablero.clearRect(0, 0, canvas.width, canvas.height)
    dibujaLinea()
    dibujaRaquetas()
    dibujaPelota()
}

mueveRaqueta()
function mueveRaqueta (){
    document.addEventListener('keydown', (tecla) => {
        if (tecla.key === 'S' || tecla.key === 's'){
            coordY += 20
        }
        if (tecla.key === 'W' || tecla.key === 'w') {
            coordY -= 20
        }
        if (tecla.key === 'ArrowDown' || tecla.key === 'k') {
            coordY2 += 20
        }
        if (tecla.key === 'ArrowUp' || tecla.key === 'i') {
            coordY2 -= 20
        }
        if (coordY > 300){ coordY = 300 }
        if (coordY < 0){ coordY = 0 }
        if (coordY2 > 300){ coordY2 = 300 }
        if (coordY2 < 0){ coordY2 = 0 }
    })
}

function muevePelota(){
    pelotaX += velX
    pelotaY += velY


    if (pelotaY - radio <= 0 || pelotaY + radio >= canvas.height){
        velY = -velY
    }


    if (pelotaX - radio <= 45 && pelotaY >= coordY && pelotaY <= coordY + 100){
        velX = -velX
    }


    if (pelotaX + radio >= 655 && pelotaY >= coordY2 && pelotaY <= coordY2 + 100){
        velX = -velX
    }

    if (pelotaX < 0 ){
        puntaje2.innerHTML = `Score:</span> <span class="value">${jugador2 += 1}</span>`
        pelotaX = 350
        pelotaY = 200
    }
    if (pelotaX > canvas.width){
        puntaje1.innerHTML= `Score:</span> <span class="value">${jugador1 += 1}</span>`
        pelotaX = 350
        pelotaY = 200    
    }
}

boton.addEventListener("click",function(){
    
    function loop(){
        muevePelota()
        dibujaTodo()
    }
    
    setInterval(loop, 20)
})