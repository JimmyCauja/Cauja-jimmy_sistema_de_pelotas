let miPelota;

function setup() {
  createCanvas(windowWidth, windowHeight);
  miPelota = new Pelota();
}

function draw() {
  background(200);
  circle(mouseX, mouseY, 20);
  miPelota.update(300);
  miPelota.display();
}
