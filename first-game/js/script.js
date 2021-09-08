const canvas = document.getElementById('game'),
    context = canvas.getContext('2d');

let enemy=[];

const fonImg = new Image();
fonImg.src = './img/fon.jpg';

const enemyImg = new Image();
enemyImg.src = './img/war.png';

enemy.push({x:800, y:0});

fonImg.onload = () => {
    game();
}

function game(){

    update();
    render();
    requestAnimFrame(game);
}

function update() {
    // физика
    for (i in enemy) {
    enemy[i].x = enemy[i].x - 10;

    // движение 
    if (enemy[i].x<=-100) 
        enemy[i].x = -100;
    }
}

function render(){
    context.drawImage(fonImg, 0, 0, 800, 500);
    for (i in enemy) context.drawImage(enemyImg, enemy[i].x, 220, 300, 250);
}

const requestAnimFrame = (()=> {
    return window.requestAnimationFrame || 
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame || 
        window.msRequestAnimationFrame ||
    function (callback){
        window.setTimeout(callback, 1000 / 20);
    };
}) ();

