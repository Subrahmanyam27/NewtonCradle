class bob {
    constructor(x, y) {
      var options = {
          isStatic : false,
          'restitution':0.8,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 40, options);
      this.width = 40;
      this.height = 40;      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      
      fill("red");
      ellipseMode(RADIUS);
      ellipse(pos.x ,pos.y , this.width, this.height);
      
    }
  };