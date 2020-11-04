class Particals {
    constructor(x, y) {
      var options = {
          isStatic:false,
      }
      this.body = Bodies.circle(x, y,8,options);
    this.radius=8;
    this.color = color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    ellipseMode(RADIUS);
      fill(this.color);
      ellipse(0, 0,this.radius,this.radius);
      pop();
    }
  }