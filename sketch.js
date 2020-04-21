const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pendulum;
var chain;
var bar;

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  pendulum = new Pendulum(600,290);
  chain = new Chain(pendulum.body,this.bar.body);
  bar = new Bar(1000,0,800,100);

}

function draw() {
  background(240);  
  Engine.update(engine);

  chain.display();
  pendulum.display();
  bar.display();
    
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});
}