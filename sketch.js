//creating the variables golbally
var car, wall;
var speed, weight;

function setup() {
  //canvas
  createCanvas(1600,400);
  
  //assiging values to the variables
  car= createSprite(50,200,50,50); 
  speed=random(55,90);
  weight=random(400,1500);
  wall= createSprite(1500,200,60,height/2);
  wall.shapeColor= color(80,80,80)
  car.velocityX= speed;
}

function draw() {
  //background
  background(0);
  
  //collision detection
  if(wall.x - car.x < (car.width + wall.width )/2){
    //making the car stop after collision
    car.velocityX=0;
    //to calculate the deformation
    var deformation=0.5*weight*speed*speed/22500;
    //to change the color of the car after deformation
    if(deformation>180){
      car.shapeColor=color(255, 0, 0);
    }  
    if (deformation > 100 && deformation<180){
      car.shapeColor=color(230, 230, 0);
    } 
    if(deformation < 100){
      car.shapeColor=color(0, 255, 0);
    }
  } 
  //display
  drawSprites();
}
