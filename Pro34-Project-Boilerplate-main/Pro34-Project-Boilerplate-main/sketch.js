const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var caminhao
var ball
var radius = 40
function preload(){
  fundoimg = loadImage("fundo.jpg")
  cleidosvaldoincomodado = loadImage("incomdado.png")
  cleidosvaldoatacante = loadImage("jogando.png")
  cleidosvaldoparado = loadImage("parado.png")
  caminhaoImg = loadImage("caminhão.png")
  
}
 
 
function setup() {
  createCanvas(1600,700);
  var ball_options={
    isStatic:false,
     restitution:0.3,
     friction:0,
     desity:1.2
 }
  engine = Engine.create();
  world = engine.world;
var options ={
 
  isStatic:true
}
ball=Bodies.circle(260,100, radius/2,ball_options)
World.add(world,ball)
caminhao = createSprite(800,575,100,100)
caminhao.addImage("caminhao",caminhaoImg)
 caminhao.scale = 0.5
cleidosvaldo = createSprite(400,540,50,50)
cleidosvaldo.addImage("parado",cleidosvaldoparado)
 cleidosvaldo.scale = 0.3
 
 
solo = Bodies.rectangle(0,650,1600,20, options)
World.add(world,solo)
 
rectMode(CENTER);
ellipseMode(RADIUS);
 
}
 
 
function draw() {
  background(fundoimg);
  Engine.update(engine);
  caminhao.velocityY = caminhao.velocityY+0.8
  
rect(solo.position.x, solo.position.y,1600,20)
  drawSprites()
  ellipse(ball.position.x,ball.position.y,radius,radius)
}
 
function keyPressed(){
	if (keyCode === UP_ARROW){
	 
 Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
 
 
	}
 
 }


