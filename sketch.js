const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new bob(220,400);
	bobObject2 = new bob(300,400);
	bobObject3 = new bob(380,400);
	bobObject4 = new bob(460,400);
	bobObject5 = new bob(540,400);

	roofObject = new roof(400,100,500,50);

	rope1 = new rope(bobObject1.body,roofObject.body,-180,0);
	rope2 = new rope(bobObject2.body,roofObject.body,-100,0);
	rope3 = new rope(bobObject3.body,roofObject.body,-20,0);
	rope4 = new rope(bobObject4.body,roofObject.body,60,0);
	rope5 = new rope(bobObject5.body,roofObject.body,140,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-105,y:-95});
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:125,y:-95})
	}
}



