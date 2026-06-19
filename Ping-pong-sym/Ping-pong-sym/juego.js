let canvas = document.getElementById('canvas')
let tablero = canvas.getContext('2d')

// Propiedades de las raquetas
var coordY = (canvas.height - 100) / 2
var coordY2 = (canvas.height - 100) / 2
const raquetaAncho = 20
const raquetaAlto = 100
const raquetaIzqX = 25
const raquetaDerX = 655

// Propiedades de la pelota
const pelotaRadio = 10
var pelotaX = canvas.width / 2
var pelotaY = canvas.height / 2
var pelotaVelX = 5
var pelotaVelY = 5

// Configurar estilo
tablero.fillStyle = 'white'

// Dibujar elementos iniciales
dibujaLinea()
iniciarJuego()

function dibujaLinea() {
    for (i = 0; i <= 400; i = i + 15) {
        tablero.fillRect(347.5, i, 5, 10)
    }
}

function iniciarJuego() {
    mueveRaqueta()
    gameLoop()
}

function gameLoop() {
    // Limpiar canvas
    tablero.clearRect(0, 0, canvas.width, canvas.height)
    
    // Dibujar línea central
    dibujaLinea()
    
    // Mover y rebotar pelota
    movePelota()
    verificarColisiones()
    
    // Dibujar raquetas
    tablero.fillRect(raquetaIzqX, coordY, raquetaAncho, raquetaAlto)
    tablero.fillRect(raquetaDerX, coordY2, raquetaAncho, raquetaAlto)
    
    // Dibujar pelota
    tablero.beginPath()
    tablero.arc(pelotaX, pelotaY, pelotaRadio, 0, Math.PI * 2)
    tablero.fill()
    
    // Continuar animación
    requestAnimationFrame(gameLoop)
}

function movePelota() {
    pelotaX += pelotaVelX
    pelotaY += pelotaVelY
}

function verificarColisiones() {
    // Colisión con bordes superior e inferior
    if (pelotaY - pelotaRadio < 0 || pelotaY + pelotaRadio > canvas.height) {
        pelotaVelY = -pelotaVelY
        // Asegurar que la pelota no salga del canvas
        if (pelotaY - pelotaRadio < 0) pelotaY = pelotaRadio
        if (pelotaY + pelotaRadio > canvas.height) pelotaY = canvas.height - pelotaRadio
    }
    
    // Colisión con raqueta izquierda
    if (pelotaX - pelotaRadio < raquetaIzqX + raquetaAncho &&
        pelotaY > coordY &&
        pelotaY < coordY + raquetaAlto &&
        pelotaVelX < 0) {
        
        pelotaVelX = -pelotaVelX
        pelotaX = raquetaIzqX + raquetaAncho + pelotaRadio
        
        // Agregar efecto: ángulo según donde golpee la raqueta
        let golpePorcentaje = (pelotaY - coordY) / raquetaAlto
        pelotaVelY += (golpePorcentaje - 0.5) * 4
    }
    
    // Colisión con raqueta derecha
    if (pelotaX + pelotaRadio > raquetaDerX &&
        pelotaY > coordY2 &&
        pelotaY < coordY2 + raquetaAlto &&
        pelotaVelX > 0) {
        
        pelotaVelX = -pelotaVelX
        pelotaX = raquetaDerX - pelotaRadio
        
        // Agregar efecto: ángulo según donde golpee la raqueta
        let golpePorcentaje = (pelotaY - coordY2) / raquetaAlto
        pelotaVelY += (golpePorcentaje - 0.5) * 4
    }
    
    // Reiniciar pelota si sale por los costados
    if (pelotaX < -pelotaRadio || pelotaX > canvas.width + pelotaRadio) {
        pelotaX = canvas.width / 2
        pelotaY = canvas.height / 2
        pelotaVelX = (Math.random() > 0.5 ? 1 : -1) * 5
        pelotaVelY = (Math.random() - 0.5) * 8
    }
}

function mueveRaqueta() {
    document.addEventListener('keydown', (tecla) => {
        // Raqueta izquierda (W/S)
        if (tecla.key === 'S' || tecla.key === 's') {
            coordY += 15
        }
        if (tecla.key === 'W' || tecla.key === 'w') {
            coordY -= 15
        }
        
        // Raqueta derecha (ArrowUp/ArrowDown o i/k)
        if (tecla.key === 'ArrowDown' || tecla.key === 'k') {
            coordY2 += 15
        }
        if (tecla.key === 'ArrowUp' || tecla.key === 'i') {
            coordY2 -= 15
        }
        
        // Limitar movimiento de raquetas dentro del canvas
        coordY = Math.max(0, Math.min(coordY, canvas.height - raquetaAlto))
        coordY2 = Math.max(0, Math.min(coordY2, canvas.height - raquetaAlto))
    })
}