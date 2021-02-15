const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var engine,world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;
var monster;
var rope;
function preload() {
//preload the images here

}

function setup() {
  createCanvas(1200, 800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,550,800,20);
  invisibleGround = new Ground(750,400,100,20);
  invisibleGround.color = "black";

  box1 = new Box(550,500,50,50);
  box2 = new Box(610,500,50,50);
  box3 = new Box(670,500,50,50);
  box4 = new Box(550,440,50,50);
  box5 = new Box(610,440,50,50);
  box6 = new Box(670,440,50,50);
  box7 = new Box(550,380,50,50);
  box8 = new Box(610,380,50,50);
  box9 = new Box(670,380,50,50);

  monster = new Monster(750,350);
  superman = new Superman(100,350)
 
  rope = new Rope(superman.body,{x : 100, y : 200});



}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();
  invisibleGround.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  monster.display();
  superman.display();

  rope.display();

}

function mouseDragged(){

  Matter.Body.setPosition(superman.body,{x : mouseX , y : mouseY});
}


