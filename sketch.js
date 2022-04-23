const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var top,left,right,bottom

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);
  top = new Ground(200,10,width,20)
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  top.show()
}

