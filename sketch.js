pelotas = [];
const Npelotas = 75;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < Npelotas; i++) {
    let pelota = new Pelota();
    pelotas.push(pelota);
}
  print(pelotas);
}

function draw() {
  background(7, 25, 82);
  for (let i = 0; i < Npelotas; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
  }
}

