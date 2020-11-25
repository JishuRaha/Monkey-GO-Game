
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodsGroup , obstaclesGroup;

var ground;
var score = 0;
var score1 = 0;
var go,goImage;
var gameState = play;
var play;
var end;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  goImage = loadImage("gameover.jpg");
 
}



function setup() {
  
monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
 
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  
  go=createSprite(200,200,1,1)
  go.addImage(goImage)
  go.scale=0.2
  
  
  FoodsGroup=new Group()
 obstaclesGroup=new Group()
  
}


function draw() {

  background(255);
  textSize("20");
  text("Survival:"+score,160,30);
  
 if(gameState === play ){
    
   if(frameCount % 60){
    score = score+1;
  }
  
    go.visible=false;
 
   if(monkey.isTouching(obstaclesGroup)){
    monkey.velocityX=0;
    obstaclesGroup.setVelocityXEach(0);
    FoodsGroup.setVelocityXEach(0);
    score=0;
     go.visible=true;
     
 }
  
  if(ground.x<0){
    ground.x=ground.width/2;
 }
  
 monkey.velocityY=monkey.velocityY+0.8;
  
 if(keyDown("space")&&monkey.y>=180){
    monkey.velocityY=-15;
  }
  
  if(monkey.isTouching(FoodsGroup)){
    score1 = score1 + 1;
  }
 
  //monkey.debug=true;
 // console.log(monkey.y);
  
  spawnBananas();
  spawnObstacles();

  
 
 
 
 }
  
  
 
  
  monkey.collide(ground);
    
 
  
  drawSprites();
  
}
function spawnBananas(){
  if(frameCount % 60 === 0){
    banana=createSprite(600,250,40,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX=-4;
    banana.Lifetime=10;
    FoodsGroup.add(banana);
  }
 
}

function spawnObstacles(){
  if(frameCount % 100 === 0 ){
    obstacle=createSprite(580,330,1,1);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-5;
    obstaclesGroup.add(obstacle);
  }
 
}



