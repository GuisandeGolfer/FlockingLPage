var al = [];
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  background(0);
  for (var i = 0; i < 4; i++) {
    al[i] = new Boid(windowWidth + random(69), windowHeight + random(69));
  }
}

function draw() {
  background("#3598db");

  /*
   * Creation of dotted background
   */
  stroke("#bdbdbd"); // Dot color
  strokeWeight(3); // Dot thickness
  for (var i = 0; i < width; i = i + 80) {
    for (var j = 0; j < height; j = j + 80) {
      point(i, j);
    }
  }
  strokeWeight(1); // Restore strokeWeight

  let target = createVector(mouseX, mouseY);
  for (var i = 0; i < al.length; i++) {
    al[i].seek(target);
    al[i].update();
    al[i].display();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
