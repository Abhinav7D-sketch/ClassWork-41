var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;
var distance=0;

var car1,car2,car3,car4,cars;
var car1_Img,car2_Img,car3_Img,car4_Img,track_Img;

var xVel,yVel;

function preload(){
  car1_Img = loadImage("images/car1.png"); 
  car2_Img = loadImage("images/car2.png");
  car3_Img = loadImage("images/car3.png");
  car4_Img = loadImage("images/car4.png");
  track_Img = loadImage("images/track.jpg");
}

function setup(){
  canvas = createCanvas(displayWidth-40,displayHeight-180);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  xVel = 0;
  yVel = 0;
}


function draw(){
  if(playerCount === 4){
     game.update(1);
  }
  if(gameState === 1){
     clear();
     game.play();
  }
  if(gameState ===2){
     console.log("Game Ended")
  }
}