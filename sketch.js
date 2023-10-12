function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  background(20, 150, 200);
  noStroke();
  let anchura = 50;
  let gap = 20;

  for (let posX = 10; posX < windowWidth; posX += anchura + gap) {
    for (let posY = 10; posY < windowHeight; posY += anchura + gap) {
      square(posX, posY, anchura);
    }
  }
}

