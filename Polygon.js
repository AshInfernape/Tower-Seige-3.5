class Polygon{
    constructor(x,y){
        var options ={
            isStatic:false,
            friction:1,
            density:2,
        }
        this.body = Bodies.circle(x,y,30,options,10)
        this.radius = 40;
        this.Image = loadImage("sprite/polygon.png")
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        ellipseMode(CENTER)
        fill("#ff6600");
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}