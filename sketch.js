function setup() {
    createCanvas(680, 680);
}

function draw(){
    background(10);
    drawMoon();
    drawEarth();
}

function drawMoon(){
    fill(128);
    noStroke();
    ellipse(340, 1100, 1200);
}

function drawEarth(){
    fill(0, 0, 255);
    noStroke();
    ellipse(100, 100, 100);
}