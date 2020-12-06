const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var  ball;
var box1,box2;
var ground1;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(220,200,50,50);              //changed the x and y position value
    box2 = new Box(240,300,50,50);              //changed the x and y position value
    ground1=new Ground(200,380,400,20);
    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(50,100,20, ball_options);
    World.add(world,ball);

}
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}