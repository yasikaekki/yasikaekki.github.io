let canvasKita = document.getElementById("myCanvas");
canvasKita.width = 1349;
canvasKita.height = 350;
let ctx = canvasKita.getContext("2d");
let imageData = ctx.getImageData(0, 0, canvasKita.width, canvasKita.height);

let x = 0, y = 0, r = 50;
let keatas = false, kebawah = true;
let kekanan = true, kekiri = false;

function animasi(){
    ctx.save();
    ctx.clearRect(0,0,canvasKita.width, canvasKita.height);
  
    ctx.beginPath();
    ctx.fillStyle = "#0d6aad";

    ctx.fillRect(0, 0, 1350, 400);
    ctx.closePath();

    //lingkaran GRADIENT
    ctx.beginPath();
    let lGrad = ctx.createRadialGradient(350,100,20,10,140,400);
    lGrad.addColorStop(0, '#ffff00');
    lGrad.addColorStop(1, '#7fffd4');
    ctx.fillStyle = lGrad;
    ctx.lineWidth= 5;
    ctx.arc(x+200,y+90,80,0,Math.PI*2);
    ctx.fill();
    ctx.closePath();

    //kotak
    ctx.beginPath();
    ctx.fillStyle = "#00ced1";
    ctx.fillRect(x+440, 235, 30, 30);

    //kotak gerak atas
    ctx.beginPath();
    ctx.fillStyle = "#adff2f";
    ctx.fillRect(x, 20, 30, 30);

    //kotak gerak bawah
    ctx.beginPath();
    ctx.fillStyle = "#adff2f";
    ctx.fillRect(x+650, 320, 30, 30);

    //membuat lingkaran kecil
    ctx.beginPath();
    ctx.strokeStyle = '#ffff00';
    ctx.arc(x+95,y+20,15,0,Math.PI*2);
    ctx.stroke();
    ctx.closePath();

    //membuat persegi
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(20, y+10, 30, 30);

    //membuat persegi
    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.strokeRect(1220, y+10, 30, 30);

    ////membuat persegi
    ctx.beginPath();
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 5;
    ctx.strokeRect(x+325, 120, 130, 130);

    //membuat lingkaran
    ctx.beginPath();
    ctx.fillStyle = 'magenta';
    ctx.arc(x+325,y+100,30,0,Math.PI*2);
    ctx.fill();

    //membuat persegi
    ctx.beginPath();
    ctx.fillStyle = "rgba(0, 150, 255, 0.3";
    ctx.fillRect(x+250, 150, 130, 130);


    cekPosisi();
    if(keatas){
        y--;
    }
    if(kebawah){
        y++;
    }
    if(kekanan){
        x++;
    }
    if(kekiri){
        x--;
    } 
    ctx.restore();
}
setInterval(animasi, 3);

function cekPosisi(){
    if(y+r == canvasKita.height-r){
        keatas = true;
        kebawah = false;
    } else if(y==0){
        keatas = false;
        kebawah = true;
    }

    if (x+r == canvasKita.width-r){
        kekanan = false;
        kekiri = true;
    } else if(x==0){
        kekanan = true;
        kekiri = false;
    }
}