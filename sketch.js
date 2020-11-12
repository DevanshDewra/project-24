
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;
var bottom , right , left;
var ball ;

function preload()
{
	
}

function setup() {
	createCanvas(600, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ground1 = new Ground(300 , 190 , 600 , 10);
	 bottom = new Dustbin(450 , 180 , 100 , 10);
	 left = new Dustbin(400 , 160 , 10 , 50);
	 right = new Dustbin(500 , 160 , 10 , 50);
	 ball = new Paper(20 , 180);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground1.display();
  bottom.display();
  left.display();
  right.display();
  ball.display();
  keyPressed();
  drawSprites();
 
}

function keyPressed(){

	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body , ball.body.position , {x:85 , y:-85} )
	}
}



