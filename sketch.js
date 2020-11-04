
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plinkos=[];
var particals=[];
function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(240,500,900,20);
	stand1=new Dvision(10,450,10,200);
	stand2=new Dvision(100,450,10,200);
	stand3=new Dvision(200,450,10,200);
	stand4=new Dvision(300,450,10,200);
	stand5=new Dvision(400,450,10,200);
	stand6=new Dvision(500,450,10,200);
	stand7=new Dvision(600,450,10,200);
	stand8=new Dvision(700,450,10,200);
	stand9=new Dvision(800,450,10,200);
	
	for (var i =35; i <=width; i=i+50) {
    plinkos.push(new Plinko(i,75,10));
	}
  
	for (var i = 10; i <=width-10; i=i+50) {
	plinkos.push(new Plinko(i,110,10));
	}
  
	for (var i = 35; i <=width; i=i+50) {
    plinkos.push(new Plinko(i,145,10));
	}
  
	 for (var i = 10; i <=width-10; i=i+50) {
     plinkos.push(new Plinko(i,180,10));
	 }
	 
	 for (var i =35; i <=width; i=i+50) {
    plinkos.push(new Plinko(i,215,10));
	}
  
	for (var i = 10; i <=width-10; i=i+50) {
	plinkos.push(new Plinko(i,250,10));
	}
  
	for (var i = 35; i <=width; i=i+50) {
    plinkos.push(new Plinko(i,285,10));
	}
  
	 for (var i = 10; i <=width-10; i=i+50) {
     plinkos.push(new Plinko(i,320,10));
	 }
  
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  stroke("black");
  fill("red");
  stand1.display();
  fill("green");
  stand2.display();
  fill("blue");
  stand3.display();
  fill("pink");
  stand4.display();
  fill("purple");
  stand5.display();
  fill("orange");
  stand6.display();
  fill("yellow");
  stand7.display();
  fill("red");
  stand8.display();
  fill("red");
  stand9.display();
 
 
  for(var i=0;i<plinkos.length;i++){
  plinkos[i].display();
  }
  for(var t=0;t<particals.length;t++){
  particals[t].display();
  }

  if(frameCount%90===0){
  particals.push(new Particals(random(width/2-10,width/2+10),10,10))	  
  }

  drawSprites();
 
}



