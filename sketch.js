var fixedRect, movingRect, object1, object2, object3, object4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(600,300,50,50);
  object1.velocityX = 5;
  

  object2 = createSprite(800,100,50,50);
  // object2.velocityX = -5;
  // object2.velocityY = -5;

  object3 = createSprite(800,800,50,50);
  // object3.velocityX = -5;

  object4 = createSprite(100,800,50,50);
  //object4.velocityY = -5;
  
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  bounceOff(movingRect,object1);
  
  if(isTouching(movingRect,object1)){
    movingRect.shapeColor = "blue";
    object1.shapeColor = "blue"
  }
  else{
    movingRect.shapeColor = "green";
    object1.shapeColor = "green";
  }

  drawSprites();
}

