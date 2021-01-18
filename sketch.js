var movingrect,fixedrect;
function setup() {
  createCanvas(1200,800);

  movingrect=createSprite(200, 200, 50, 50);
  movingrect.shapeColor="green"
  fixedrect=createSprite(400, 200, 50, 50);
  fixedrect.shapeColor="green"


}

function draw() {
  background(0);
  movingrect.x=World.mouseX
  movingrect.y=World.mouseY  
  if(movingrect.x-fixedrect.x===movingrect.width/2+fixedrect.width/2){
    movingrect.shapeColor="red"
    fixedrect.shapeColor="red"
  }
  else{
    movingrect.shapeColor="green"
    fixedrect.shapeColor="green"
  }
  drawSprites();
}