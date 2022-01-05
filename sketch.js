var balloon,balloonImage1,balloonImage2;
// crea aquí la base de datos y la variable de posición 
var hypnoticBall,satabase,position;
function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Función para configurar el entorno inicial
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  hypnoticBall=createSprite(250,450,150,150);
  hypnoticBall.addAnimation("hotAirBalloon",balloonImage1);
  hypnoticBall.scale=0.5;

  var hipnoticBallPosition = database.ref("ball/position");
  hipnoticBallPosition.on("value", readPosition , showError);

  textSize(20); 
}

function draw() {
  background(bg);
  if(position !== undefined){
  if(keyDown(LEFT_ARROW)){
    //escribe el código para mover el globo aerostático en dirección hacia la izquierda
    writePosition(-1,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    //escribe el código para mover el globo aerostático en dirección hacia la derecha
    writePosition(1,0);
  }
  else if(keyDown(UP_ARROW)){
    //escribe el código para mover el globo aerostático en dirección ascendente
    writePosition(0,-1);
  }
  else if(keyDown(DOWN_ARROW)){
    //escribe el código para mover el globo aerostático en dirección descendente
    writePosition(0,+1);
  }
}
  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**¡Utiliza las teclas de flecha para mover el globo aerostático!",40,40);
}

function readPosition(data){
  position = data.val();
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function writePosition(x,y){
  database.ref("ball/position").set({
      "x" : position.x + x,
      "y" : position.y + y
  })
}

function showError(){

}
