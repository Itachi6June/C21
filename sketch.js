var fixedRect, movingRect;
var gameobject1, gameobject2, gameobject3, gameobject4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  
  gameobject1 = createSprite(700, 400,80,80);
  gameobject1.shapeColor = "green";
  gameobject1.debug = true;
  
  gameobject2 = createSprite(100, 400,80,80);
  gameobject2.shapeColor = "green";
  gameobject2.debug = true;
  gameobject1.velocityX = -5;
  gameobject2.velocityX = +5;

  gameobject3 = createSprite(200, 200,80,30);
  gameobject3.shapeColor = "green";
  gameobject3.debug = true;

  gameobject4 = createSprite(600, 200,80,30);
  gameobject4.shapeColor = "green";
  gameobject4.debug = true;
}

function draw() {
  background(0,0,0);  
  
  bounceOff(gameobject1, gameobject2);
  
  drawSprites();
}
