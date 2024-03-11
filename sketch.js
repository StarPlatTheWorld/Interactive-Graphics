var angle = 0.0; var scaler = 250;
var x0 = 340; var y0 = 340;

let startTime;
let durationTime =  1 * 60 * 1000;

function setup() {
    createCanvas(680, 680);
    startTime = millis();
}

function drawMoon(){
    x = x0 + cos(angle) * scaler;
    y = y0 + sin(angle) * scaler;
    fill(moonColour);
    noStroke();
    ellipse(x, y, 40);
    angle += speed;
}

function drawEarth(){
    beginShape();
    fill(earthColour);
    noStroke();
    ellipse(x0, y0, 200);
    endShape(CLOSE);
}

function draw(){
    background(10);
    drawRocket();
    drawMoon();
    drawEarth();
    drawStar();
    let timeElapsed = millis() - startTime;
    if (timeElapsed >= durationTime) {
        noLoop();
    }
}