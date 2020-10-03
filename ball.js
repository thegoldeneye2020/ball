class Ball{
    constructor(x,y,width,height) {
        var options = {
            'restitution':1,
        'friction':0.9,
        'density':1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("orange");
        rect(pos.x, pos.y, this.width, this.height);
      }
    };
    
    