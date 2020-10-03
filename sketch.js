
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1200,400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(600,height,1200,20);
dustbin1=new Dustbin(990,380,250,20);
dustbin2=new Dustbin(1120,340,20,100);
dustbin3=new Dustbin(870,340,20,100);
ball=new Ball(100,370,30,30);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();
keypressed();
 drawSprites();
}

function keypressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}

