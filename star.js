function drawStar() {
    translate(mouseX - 25, mouseY - 35);
    noStroke();
    fill(255, 255, 150);
    triangle(30, 60, 10, 30, 50, 30);
    triangle(30, 20, 10, 50, 50, 50);
}