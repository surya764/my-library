var fixedRect, movingRect;
var object1,object2,object3,object4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1 = createSprite(200,200,20,20);
  object1.shapeColor = "yellow";

  object2 = createSprite(300,400,20,20);
  object2.shapeColor = "yellow";

  object3 = createSprite(400,500,20,20);
  object3.shapeColor = "yellow";

  object4 = createSprite(600,700,20,20);
  object4.shapeColor = "yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect,object1)) {
    movingRect.shapeColor = "red";
    object1.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    object1.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(p1,p2){
  if (p1.x - p2.x < p2.width/2 +p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
      return true;
 
}
else {
  return false;
}
}