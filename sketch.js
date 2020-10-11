
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
//groundSprite=creatSprite(width/2,height-35,width,10);
//groundSprite.shapeColor=color(255);

ground = Bodies.rectangle(width/2,650,width,10,{isStatic:true});
World.add(world,ground);

	//Create the Bodies Here.
	paper1 = new Paper(200,400,10);

	box1 = new Box(width/2,650,150,20);
	box2 = new Box(width/2-80,585,20,150);
	box3 = new Box(width/2+80,585,20,150);
	
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:10,y:-14});
}

}

