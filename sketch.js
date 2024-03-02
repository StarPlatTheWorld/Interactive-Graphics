var angle = 0.0; var scaler = 250; var speed = 0.02;
var x0 = 340; var y0 = 340;

function setup() {
    createCanvas(680, 680);
}

function draw(){
    background(10);
    drawMoon();
    drawEarth();
}

function drawMoon(){
    fill(0, 0, 255);
    noStroke();
    ellipse(x0, y0, 200);
}

function drawEarth(){
    x = x0 + cos(angle) * scaler;
    y = y0 + sin(angle) * scaler;
    fill(128);
    noStroke();
    ellipse(x, y, 40);
    angle += speed;
    
}