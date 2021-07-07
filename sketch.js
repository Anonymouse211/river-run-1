const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world, bodies;
var bg, bg_img;
var l1, l2, l3, l4, lp;
var bi1, bi2, bi3;
var logsGroup, birdsGroup;
var PLAY = "1";
var END = "0";
var gameState = PLAY;

function preload(){
  bg_img = loadImage("backg.gif");

  l1 = loadImage("logs/lo1.png");
  l2 = loadImage("logs/lo2.png");
  l3 = loadImage("logs/lo3.png");
  l4 = loadImage("logs/lo4.png");
  lp = loadImage("logs/lp.png");

  bi1 = loadImage("birds/bir1.png");
  bi2 = loadImage("birds/bir2.png");
  bi3 = loadImage("birds/bir3.png");

}

function setup(){
createCanvas(540,480);

logsGroup = new Group();

}

function draw(){
  background(0);

  image(bg_img,0,0,width,height);
  spawnLogs();
  drawSprites();
}

function spawnLogs(){
  if (frameCount%60===0){
    var log = createSprite(600,400,40,10); 
    var rand = Math.round(random(1,5)); 
    switch(rand) {
      case 1: log.addImage(l1);
              break;
      case 2: log.addImage(l2);
              break;
      case 3: log.addImage(l3);
              break;
      case 4: log.addImage(l4);
              break;
      case 5: log.addImage(lp);
              break;
      default: break;
    }
    
    log.scale = 0.3;
    log.velocityX = -3; 
    log.lifetime = 200; 

    logsGroup.add(log); 
} 


}




function spawnOb(){



}
