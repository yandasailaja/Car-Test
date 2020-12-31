
var car, wall;
var speed, weight;


function setup() {
  createCanvas(1000,700);
  speed = random(55, 90);
  weight = random(400, 1500);
  Car = createSprite(200, 200, 50, 50);
  wall = createSprite(100, 200, 60, height/2);
  color(80,80,80);

}

function draw() {
  background("black");  
  car.velocityX = speed;
  car.display();
  wall.display();
  drawSprites();
}