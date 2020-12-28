
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var ground,paper,dustBin1,dustBin2,dustBin3

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750,height,1500,100);
	paper = new Paper(0,0,80,80);
	dustBin1 = new DustBin(1100,625,50,250);
	dustBin2 = new DustBin(1320,625,50,250);
	dustBin3 = new DustBin(1210,725,180,50);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(32,32,0);
	Engine.update(engine);
	ground.display();
	paper.display();
	dustBin1.display();
	dustBin2.display();
	dustBin3.display();
	keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x: 85,y: -85});
	}
}



