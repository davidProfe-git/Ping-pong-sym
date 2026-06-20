let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')

let estado = 'INICIO' 
let ganador = ''

let jugador1 = { x: 25, y: 150, ancho: 20, alto: 100, score: 0, color: '#3498db' }
let jugador2 = { x: 655, y: 150, ancho: 20, alto: 100, score: 0, color: '#e74c3c' }
let pelota = { x: 350, y: 200, radio: 10, velx: 5, vely: 5, color: '#f1c40f' }

let teclas = {}

document.addEventListener('keydown', function (e) {
    teclas[e.key] = true
    if (estado !== 'JUEGO' && e.key === 'Enter') {
        reiniciarJuego()
    }
})

document.addEventListener('keyup', function (e) {
    teclas[e.key] = false
})

function moverControles() {
    if (teclas['w'] || teclas['W']) jugador1.y -= 6
    if (teclas['s'] || teclas['S']) jugador1.y += 6
    if (teclas['ArrowUp']) jugador2.y -= 6
    if (teclas['ArrowDown']) jugador2.y += 6

    if (jugador1.y < 0) jugador1.y = 0
    if (jugador1.y > 300) jugador1.y = 300
    if (jugador2.y < 0) jugador2.y = 0
    if (jugador2.y > 300) jugador2.y = 300
}

function calcularColisiones() {
    pelota.x += pelota.velx
    pelota.y += pelota.vely

    if (pelota.y - pelota.radio <= 0 || pelota.y + pelota.radio >= 400) {
        pelota.vely *= -1
    }

    if (pelota.x - pelota.radio < jugador1.x + jugador1.ancho &&
        pelota.x + pelota.radio > jugador1.x &&
        pelota.y + pelota.radio > jugador1.y &&
        pelota.y - pelota.radio < jugador1.y + jugador1.alto) {
        pelota.velx = Math.abs(pelota.velx) * 1.05
        pelota.vely *= 1.02
    }

    if (pelota.x + pelota.radio > jugador2.x &&
        pelota.x - pelota.radio < jugador2.x + jugador2.ancho &&
        pelota.y + pelota.radio > jugador2.y &&
        pelota.y - pelota.radio < jugador2.y + jugador2.alto) {
        pelota.velx = -Math.abs(pelota.velx) * 1.05
        pelota.vely *= 1.02
    }

    if (pelota.x < 0) {
        jugador2.score++
        verificarGanador()
    } else if (pelota.x > 700) {
        jugador1.score++
        verificarGanador()
    }
}

function verificarGanador() {
    if (jugador1.score >= 5) {
        ganador = 'JUGADOR 1 (AZUL)'
        estado = 'FIN'
    } else if (jugador2.score >= 5) {
        ganador = 'JUGADOR 2 (ROJO)'
        estado = 'FIN'
    } else {
        resetPelota()
    }
}

function resetPelota() {
    pelota.x = 350
    pelota.y = 200
    pelota.velx = pelota.velx > 0 ? -5 : 5
    pelota.vely = Math.random() > 0.5 ? 5 : -5
}

function reiniciarJuego() {
    jugador1.score = 0
    jugador2.score = 0
    jugador1.y = 150
    jugador2.y = 150
    resetPelota()
    estado = 'JUEGO'
}

function dibujarMarcador() {
    tablero.font = '32px "Courier New"'
    tablero.fillStyle = jugador1.color
    tablero.fillText(jugador1.score, 175, 50)
    tablero.fillStyle = jugador2.color
    tablero.fillText(jugador2.score, 525, 50)
}

function dibujarEscenario() {
    tablero.clearRect(0, 0, 700, 400)

    tablero.fillStyle = 'rgba(255, 255, 255, 0.3)'
    for (let i = 0; i <= 400; i += 15) {
        tablero.fillRect(347.5, i, 5, 10)
    }

    tablero.fillStyle = jugador1.color
    tablero.fillRect(jugador1.x, jugador1.y, jugador1.ancho, jugador1.alto)

    tablero.fillStyle = jugador2.color
    tablero.fillRect(jugador2.x, jugador2.y, jugador2.ancho, jugador2.alto)

    tablero.fillStyle = pelota.color
    tablero.beginPath()
    tablero.arc(pelota.x, pelota.y, pelota.radio, 0, Math.PI * 2)
    tablero.fill()

    dibujarMarcador()
}

function dibujarPantallas() {
    tablero.clearRect(0, 0, 700, 400)
    tablero.textAlign = 'center'
    tablero.fillStyle = 'white'

    if (estado === 'INICIO') {
        tablero.font = '40px "Courier New"'
        tablero.fillText('PING PONG MULTIJUGADOR', 350, 150)
        tablero.font = '18px "Courier New"'
        tablero.fillText('J1 (Azul): W / S | J2 (Rojo): Flechas', 350, 220)
        tablero.fillText('Presiona ENTER para iniciar', 350, 270)
    } else if (estado === 'FIN') {
        tablero.font = '40px "Courier New"'
        tablero.fillStyle = 'white'
        tablero.fillText('PARTIDA TERMINADA', 350, 130)
        tablero.fillStyle = ganador === 'JUGADOR 1 (AZUL)' ? jugador1.color : jugador2.color
        tablero.fillText('GANADOR: ' + ganador, 350, 200)
        tablero.fillStyle = 'white'
        tablero.font = '18px "Courier New"'
        tablero.fillText('Presiona ENTER para volver a jugar', 350, 280)
    }
    tablero.textAlign = 'start'
}

function bucleJuego() {
    if (estado === 'JUEGO') {
        moverControles()
        calcularColisiones()
        dibujarEscenario()
    } else {
        dibujarPantallas()
    }
    requestAnimationFrame(bucleJuego)
}

bucleJuego()