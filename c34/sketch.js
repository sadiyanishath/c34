const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var c1,c2,c3,c4,c5
var boggie1,boggie2,boggie3,boggie4,boggie5,boggie6;
var chain1,rock
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);

  boggie1= new Bogy(50,170,50,50)
  boggie2= new Bogy(150,170,50,50)
  boggie3= new Bogy(250,170,50,50)
  boggie4= new Bogy(350,170,50,50)
  boggie5= new Bogy(450,170,50,50)
  boggie6= new Bogy(550,170,50,50)

  c1 = new Chain(boggie1.body,boggie2.body)
  c2 = new Chain(boggie2.body,boggie3.body)
  c3 = new Chain(boggie3.body,boggie4.body)
  c4 = new Chain(boggie4.body,boggie5.body)
  c5 = new Chain(boggie5.body,boggie6.body)

  rock = new Rock(1100,200,100,100)
  
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  ground.display();

  boggie1.display();
  boggie2.display();
  boggie3.display();
  boggie4.display();
  boggie5.display();
  boggie6.display();

  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();

  rock.display()
}

 
function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y}, {x:0.5,y:0});
      
  }
  
  
  }
  
  

  
