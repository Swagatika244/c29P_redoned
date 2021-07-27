const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var base1, base2;
var bridge;
var jointPoint;
var stone;
var stones=[];


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  //stone = new Stone(700, 100, 60);

  base1 = new Base(300, height/2+50, 600, 100, 'yellow', true);
  base2 = new Base(width-300, height/2+50, 600, 100, 'yellow', true);
  bridge = new Bridge(15, {x:width/2-400, y:height/2});

  jointPoint = new Base(width-600,height/2+10, 40, 20,'yellow', true);
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for (var i=0; i<=8; i++){
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10,140);
    var stone = new Stone(x, y, 80, 80);
     stones.push(stone);
    }
  
  
}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show();
  base1.show();
  base2.show();

  for (var stone of stones){
    stone.show();
    //stones[2].show();
  }
    


}
