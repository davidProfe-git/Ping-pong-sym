let canva =  document.getElementById("canva")
let lienzo = canva.getContext("2d")
for (i=0; i<=300;i+= 10){

lienzo.beginPath()
lienzo.strokeStyle = "#ff0000"
lienzo.moveTo(0,i)
lienzo.lineTo (i+30,300)
lienzo.stroke()
lienzo.closePath()
}

for (i=0; i<=300;i+=10){

lienzo.beginPath()
lienzo.strokeStyle = "#0f43d3"
lienzo.moveTo(300,i)
lienzo.lineTo (i+30,0)
lienzo.stroke()
lienzo.closePath()
}


for (i=0; i<=300;i+=10){

lienzo.beginPath()
lienzo.strokeStyle = "#2c2727"
lienzo.moveTo(i+0,0)
lienzo.lineTo (0,300-i)
lienzo.stroke()
lienzo.closePath()
}


for (i=0; i<=300;i+=10){

lienzo.beginPath()
lienzo.strokeStyle = "#16d30f"
lienzo.moveTo(300-i,300)
lienzo.lineTo (300,0+i)
lienzo.stroke()
lienzo.closePath()
}

