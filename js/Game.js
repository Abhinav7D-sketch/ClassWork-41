class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref("playerCount").once("value");
      if(playerCountRef.exists){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
      car1 = createSprite(100,200);
      car1.addImage(car1_Img);
      car2 = createSprite(300,200);
      car2.addImage(car2_Img);
      car3 = createSprite(500,200);
      car3.addImage(car3_Img);
      car4 = createSprite(700,200);
      car4.addImage(car4_Img);
      cars = [car1,car2,car3,car4];

  }

  play(){
    form.hide();
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      background("purple");
      image(track_Img,0,-displayHeight*4,displayWidth,displayHeight*5);
        
     //var display_position = 130;
     //index of the array
     var index = 0;

     //x && y position of the cars
     var x = 200;
     var y;
      
      for (var plr in allPlayers){
        //add one to index for every loop
        index = index+1;


        //position the cars a little away from each other in x axas
        x = allPlayers[plr].xPos;
        x = 200 + (index*200) + allPlayers[plr].xPos;

        //use data from the database to display the cars in y direction
        y = displayHeight-allPlayers[plr].distance;
        
        cars[index-1].x=x;
        cars[index-1].y=y;
        
        if(index===player.index){
          cars[index-1].shapeColor = "black";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y;
        }
      //display_position = display_position + 20;
      //textSize(15);
      //text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
      }
    }
   // if(keyIsDown(UP_ARROW)& player.index !== null){
     //   player.distance = player.distance+50;
       // player.update();
    //}

    if(player.distance<=4100){
    if(keyIsDown(38)&& player.index !==null){
         yVel = yVel + 0.9;
         if(keyIsDown(37)){
            xVel = xVel - 0.2;
         }
         if(keyIsDown(39)){
           xVel = xVel + 0.2;
         }else if(keyIsDown(38)&& yVel > 0 && player.index!==null){
          yVel = yVel - 0.1;
          xVel = xVel * 0.9;
         }else {
           yVel = yVel * 0.9;
           xVel = xVel * 0.9;
         }
         player.xPos = player.xPos + xVel;
         xVel = xVel + 0.9;
         player.distance = player.distance + yVel;
         player.update();
    }
  }

    //console.log(player.distance);
    //if(player.distance>=4100){
     // gameState = 2
    //}
     drawSprites();
  }
}