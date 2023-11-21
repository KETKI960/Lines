function setup() {
  createCanvas(800, 600);
  background(0); // Set background color to black
  stroke(255); // Set stroke (line) color to white
}

function draw() {
  // Draw white lines
  for (let i = 0; i < 100; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    line(x1, y1, x2, y2);
  }

  noLoop(); // Stop the draw loop after one iteration
}
