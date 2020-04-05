var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud_image;
var O1,O2,O3,O4,O5,O6;
var OGroup,cloudGroup;
var score = 0;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png");
  cloud_image = loadImage("cloud.png");
  O1 = loadImage("obatacle1.png");
  O2 = loadImage("obatacle2.png");
  O3 = loadImage("obatacle3.png");
  O4 = loadImage("obatacle4.png");
  O5 = loadImage("obatacle5.png");
  O6 = loadImage("obatacle6.png");
  
  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -6;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  OGroup = new Group();
  cloudGroup = new Group();
}

function draw() {
  background(180);
  
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  spawn_clouds();
  spawn_Os();
  
  drawSprites();
  
  score = score+Math.round(getFrameRate()/60);
  text("Score:"+score,500,50);
}
function spawn_clouds(){
  if (frameCount%60 === 0){
    var cloud = createSprite(600,Math.round(random(80,120)),40,10);
    cloud.velocityX = -3;
    cloud.addImag(cloud_image);
    cloud.scale = 0.5;
    cloudGroup.add(cloud);
    cloud.depth = trex.depth;
    trex.depth ++;
    cloud.lifetime = 200;
  }
}
function spawn_Os(){
  if(frameCount%60 === 0){
    var O = createSprite(600,165,10,40);
    O.velocityX = -6;
    var rand = Math.round(random(1,6));
    switch(rand){
      case 1: O.addImage(O1);
      break;
      case 2: O.addImage(O2);
      break;
      case 3: O.addImage(O3);
      break;
      case 4: O.addImage(O4);
      break;
      case 5: O.addImage(O5);
      break;
      case 6: O.addImage(O6);
      break;
      default: break;
    }
    O.scale = 0.5;
    O.lifetime = 100;
    
  }  
}