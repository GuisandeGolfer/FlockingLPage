class Boid {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.maxSpeed = random(10);
    this.maxSteer = 0.5;
    this.angle = 0;
  }
  display() {
    push();
    translate(this.pos.x, this.pos.y);
    fill(255, 180);
    stroke(255);
    rotate(this.angle);

    triangle(0, 0, -15, 5, -15, -5);
    pop();
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.angle = this.vel.heading();
    // this.vel.mult(0.8); //eventually will be removed with steering
  }
  applyForce(f) {
    let force = f.copy();
    this.acc.add(force);
  }
  seek(target) {
    let desired = p5.Vector.sub(target, this.pos);
    desired.normalize();
    desired.mult(this.maxSpeed);

    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxSteer);
    this.applyForce(steer);
  }
}
