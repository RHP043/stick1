const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;



function setup() {

  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);

  log1 = new Log(540,360,150);
  log2 =  new Log(660,360,150);
  log3 = new Log(560,360,150);
  log9 = new Log(520,360,150);
  log10 = new Log(500,360,150);
  log11 = new Log(680,360,150);
  log12 = new Log(700,360,150);
  log13 = new Log(720,360,150);

  log4 = new Log(580,360,660);
  log5 = new Log(640,360,660);

  log6 = new Log(640,360,600)
  log7 = new Log(600,360,600);
  log8 = new Log(620,360,600);

  box1 = new Box(440,360,70,70);
  box2 = new Box(440,290,70,70);
  log14 = new Log(480,360,210);
  log15 = new Log(400,360,210);


  box3 = new Box(780,360,70,70);
  box4 = new Box(780,290,70,70);
  log16 = new Log(740,360,210);
  log17 = new Log(820,360,210);
}

function draw() {

  
  ground.display();

  box1.display();
  box2.display();
  log14.display();
  log15.display();

  box3.display();
  box4.display();
  log16.display();
  log17.display();

  log1.display();
  log2.display();
  log6.display();
  log3.display();
  log8.display();
  log7.display();
  log4.display();
  log5.display();
  log9.display();
  log10.display();
  log13.display();
  log12.display();
  log11.display();

  drawSprites();
}