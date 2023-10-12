pelotas = [];
const NP = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NP; i++){
    let pelota = new Pelota();
    pelotas.push(pelota);
  }
}
print(pelotas);

function draw() {
  background(150, 140, 254);
  for (let i = 0; i < NP; i++) {
    pelotas[i].update(windowHeight);
    pelotas[i].display();
}
}

function mousePressed() {
  let pelota = new Pelota();
  pelotas.push(pelota);
}

