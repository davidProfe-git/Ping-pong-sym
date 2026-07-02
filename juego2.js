let canvas = document.getElementById('canvas');
let tablero = canvas.getContext('2d');

let pelota = {
    x:350,
    y:200,
    velx:5,
    vely:5
};

let jugador1 = {
    raqueta:25,
    raquetaY:150,
    puntaje:0
};

let jugador2 = {
    raqueta:655,
    raquetaY:150,
    puntaje:0
};

tablero.fillStyle = 'white';

function dibujarTablero(){

    tablero.clearRect(0,0,700,400);

    tablero.fillRect(jugador1.raqueta,jugador1.raquetaY,20,100);

    tablero.fillRect(jugador2.raqueta,jugador2.raquetaY,20,100);

    for(let i=0;i<=400;i+=15){
        tablero.fillRect(347.5,i,5,10);
    }

    tablero.beginPath();
    tablero.arc(pelota.x,pelota.y,10,0,Math.PI*2);
    tablero.fill();
}

function moverPelota(){

    pelota.x += pelota.velx
    pelota.y += pelota.vely

    // Rebote arriba y abajo
    if(pelota.y >= 390 || pelota.y <= 10){
        pelota.vely *= -1
    }

    // Raqueta izquierda
    if(
        pelota.x - 10 <= jugador1.raqueta + 20 &&
        pelota.y >= jugador1.raquetaY &&
        pelota.y <= jugador1.raquetaY + 100
    ){
        pelota.velx *= -1
        pelota.x = jugador1.raqueta + 30
    }

    // Raqueta derecha
    if(
        pelota.x + 10 >= jugador2.raqueta &&
        pelota.y >= jugador2.raquetaY &&
        pelota.y <= jugador2.raquetaY + 100
    ){
        pelota.velx *= -1
        pelota.x = jugador2.raqueta - 10
    }

}

function iniciar(){

    moverPelota();

    dibujarTablero();

    requestAnimationFrame(iniciar);

}

function mueveRaqueta(){

    document.addEventListener('keydown',function(tecla){

        if(tecla.key=='ArrowUp'){
            jugador2.raquetaY-=15;
        }

        if(tecla.key=='ArrowDown'){
            jugador2.raquetaY+=15;
        }

        if(tecla.key=='w'){
            jugador1.raquetaY-=15;
        }

        if(tecla.key=='s'){
            jugador1.raquetaY+=15;
        }

        if(jugador1.raquetaY<0){
            jugador1.raquetaY=0;
        }

        if(jugador1.raquetaY>300){
            jugador1.raquetaY=300;
        }

        if(jugador2.raquetaY<0){
            jugador2.raquetaY=0;
        }

        if(jugador2.raquetaY>300){
            jugador2.raquetaY=300;
        }

    });

}

mueveRaqueta();
iniciar();