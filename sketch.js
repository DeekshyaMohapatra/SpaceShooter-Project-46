var spaceShipImage;
var bgImage;
var spaceShip;
var alien,alienImage,alien2,alienImage2;
var laser,laserImage;
var earth,earthImage;
var asteroid,asteroidImage;

function preload()
{
  bgImage=loadImage("SpaceBg.PNG");
  spaceShipImage=loadImage("plane.PNG");
  alienImage=loadImage("alien2.PNG");
  laserImage=loadImage("laser.PNG");
  alienImage2=loadImage("alien1.PNG");
  earthImage=loadImage("Earth.PNG");
  asteroidImage=loadImage("asteroid.PNG");
}


function setup() {
  createCanvas(750, 900);
  
  spaceShip=createSprite(350,600,50,50)
  spaceShip.addImage(spaceShipImage);
  spaceShip.scale=0.3

  earth=createSprite(370,1250,50,50);
  earth.addImage(earthImage);
  earth.scale=1.5
  
  alienGroup = new Group();
  alienGroup2 = new Group();
  laserGroup=new Group();
  asteroidGroup=new Group();
}

function draw() {
  background(bgImage);

if(keyDown(LEFT_ARROW))
{
  spaceShip.x = spaceShip.x-7;
}

if(keyDown(RIGHT_ARROW))
{
  spaceShip.x=spaceShip.x+7;
}

if(keyDown("space"))
{
   createLaser();
}


if(laserGroup.isTouching(alienGroup))
{
 alienGroup.destroyEach();
 laserGroup.destroyEach();
}
if(laserGroup.isTouching(alienGroup2))
{
 alienGroup2.destroyEach();
 laserGroup.destroyEach();
}
if(laserGroup.isTouching(asteroidGroup))
{
 asteroidGroup.destroyEach();
 laserGroup.destroyEach();
}


spawnAliens();
spawnAliens2();
spawnAsteroids()
  drawSprites();
}

function spawnAliens()
{
 if(frameCount%250===0)
 {
    alien=createSprite(350,20,60,60);
    alien.velocityY = 3.5
    alien.addImage(alienImage);
    alien.x=Math.round(random(20,600));
    alienGroup.add(alien);
 }
}
function spawnAliens2()
{
 if(frameCount%300===0)
 {
    alien2=createSprite(350,20,60,60);
    alien2.velocityY = 3 
    alien2.addImage(alienImage2);
    alien2.x=Math.round(random(20,600));
    alienGroup2.add(alien2);
 }
}

function spawnAsteroids()
{
 if(frameCount%350===0)
 {
    asteroid=createSprite(300,20,60,60);
    asteroid.scale=0.2;
    asteroid.velocityY = 2.5 
    asteroid.addImage(asteroidImage);
    asteroid.x=Math.round(random(20,600));
    asteroidGroup.add(asteroid);
 }
}

function createLaser()
{
  laser=createSprite(200, 470, 5, 50);
              laser.addImage(laserImage);
              laser.velocityY=-6;
              laser.x=spaceShip.x;
              laser.scale=0.3;
              laser.lifetime = 80;
              laserGroup.add(laser);
}