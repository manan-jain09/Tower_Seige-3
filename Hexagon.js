class Hexagon{
  constructor(x, y) {
      var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
      }
      this.body = Bodies.circle(x, y, 35, options);
      this.image = loadImage("hexa.png");
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, 70, 70);
      pop();
    }
}