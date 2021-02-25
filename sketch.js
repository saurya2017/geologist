
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hammer1,ground1,stone1,rubber1,sand1,sand2,sand3,sand4,sand5,sand6,iron1




function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer1=new Hammer(130,420)
	ground1=new Ground(553,623,2400,20)
	stone1=new Stone(315,600,50,50)
	rubber1=new Rubber(760,610,50,50);
	sand1=new Sand(380,610,5,5);
	sand2=new Sand(430,600,5,5);
	sand3=new Sand(485,608,5,5);
  sand4=new Sand(540,610,5,5);
	sand5=new Sand(600,608,5,5);
	sand6=new Sand(670,610,5,5);
  iron1=new Iron(760,610,50,50);

	

	
  
}


function draw() {
  background("lightgreen");
  
  
  Engine.update(engine);

  hammer1.display();
  ground1.display();
  stone1.display();
  rubber1.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron1.display();
  


  

  
  
drawSprites();

  text(mouseX + ',' + mouseY,10,45)


 
}



