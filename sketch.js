
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {


var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

groundObj=new Ground(width/2,670,width,20);
  leftSide = new Ground(1100,600,20,120);


	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
Matter.Bodies.circle(40,40,3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  groundObj.display();
}

  

function keyPressed(){
	if (keyCode === UP_ARROW) {
ball.UP_ARROW(vForce);
	}
}

function vForce()
{
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
