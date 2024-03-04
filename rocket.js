var rocketX = 50;
var rocketY = -150;
var rxX = 0; var ryY = -5;

function drawRocket() {
  //flames
  noStroke()
  fill(255, 155, 0)
  ellipse(rocketX - 10, rocketY + 35, 10, 30);
  ellipse(rocketX + 10, rocketY + 35, 10, 30);
  fill(255, 185, 0)
  ellipse(rocketX, rocketY + 35, 20, 60);
  //bottom sidefins
  fill(30, 30, 30)
  arc(rocketX, rocketY + 36, 40, 40, PI, 0, CHORD);
  //top sidefins
  fill(30, 30, 30)
  arc(rocketX, rocketY - 6, 45, 45, PI, 0, CHORD);
  //body
  fill(30, 140, 30)
  ellipse(rocketX, rocketY, 35, 75);
  //window
  fill(255)
  ellipse(rocketX, rocketY - 10, 20, 20)
  fill(255)
  ellipse(rocketX, rocketY + 10, 10, 10)
  rocketX += rxX;
  rocketY += ryY;
  if (rocketY < -rocketX ){
    rocketY = height + rocketX;
  }
}