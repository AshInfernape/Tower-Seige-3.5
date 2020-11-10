const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var platform1 , platform2 ;
var slingshot;
var bg = "sprite/bg1.png";
var polygon;
var score = 0;

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(450,790,990,30);
  platform1 = new Ground(490, 300, 250, 10);
  platform2 = new Ground(800, 200, 200, 10); 
  block1 = new Block(455,275,40,40);
  block2 = new Block(470,235,40,40);
  block3 = new Block(500,275,40,40);
  block4 = new Block(510,235,40,40);
  block5 = new Block(540,275,40,40);
  block6 = new Block(490,195,40,40);
  block7 = new Block(750,175,40,40);
  block8 = new Block(790,175,40,40);
  block9 = new Block(770,135,40,40);
  block10 = new Block(830, 175,40,40);
  block11 = new Block(810, 135,40,40);
  block12 = new Block(790,95,40,40);
  polygon = new Polygon(100,200,30,10);
  slingShot = new SlingShot(polygon.body,{x:230,y:120})
 
 

  Engine.run(engine); 
}
function draw() {
  if(backgroundImg)
  background(backgroundImg);
   Engine.update(engine);  
  textSize(30)
  fill("red")
  text("Drag the block , aim and launch towards the blocks!!",50,30)
  
  noStroke();
  textSize(35)
  fill("#ff2200")
  text("Score :" + score, width-300, 70)

   ground.display();
  platform1.display();
  platform2.display();
  stroke(1)
 strokeWeight(5)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
   slingShot.display();
  polygon.display();
 
  
    keyPressed();
  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly()
}
function keyPressed(){
  if(keyCode === 32){
  slingShot.attach(polygon.body)
}
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "sprite/bg1.png";
  }
  else{
      bg = "sprite/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
 // console.log(backgroundImg);
}
