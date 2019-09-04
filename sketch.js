let fr = 60;
function setup() {
  createCanvas(650, 500);
  topLayer = createGraphics(650, 500);
  topLayer.clear();
  frameRate(fr);
}

function draw() {
  background(0);
  ellipsePointer();
  paint();
  image(topLayer, 0, 0);
  //deltaTime = deltaTime + 1000;
}

function paint() {
  if (mouseIsPressed) {
    topLayer.noStroke();
    topLayer.fill(230, 120, 230, 100);
    topLayer.ellipse(mouseX , mouseY, 20, 20);
  }
}

function ellipsePointer() {
  stroke(255);
  fill(250, 140, 260, 160);
  ellipse(mouseX, mouseY, 20, 20);
  
}