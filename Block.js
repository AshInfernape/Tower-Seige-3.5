class Block{
    constructor(x, y, width, height){
      var options ={
        isStatic:false,
         friction:1.0,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.Visibility = 255;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
    
      display(){    
        if(this.body.speed<1){
         var angle = this.body.angle;
         var pos = this.body.position;
         push();
        translate(pos.x,pos.y);
        rotate(angle)
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
        }
        else{
          World.remove(world, this.body);
          push();
          this.Visiblity = this.Visiblity - 5;
          tint(255,this.Visiblity);
          stroke("green")
          strokeWeight(1)
          rectMode(CENTER);
          rect(0,0,this.width,this.height);
          pop();
       //   console.log(this.body.speed)
        }
      }
      score(){
      if(this.Visiblity<0 && this.Visiblity>-105){
        score++;
                }
              }
}

  
  