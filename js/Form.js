class Form {
  constructor() {
     this.title = createElement("h2");
     this.input = createInput("name");
     this.button = createButton("play");
     this.greeting = createElement("h4");
  }

  display(){
    this.title.html("Car Racing Game!!!");
    this.title.position(displayWidth/2-80,0);
  
    this.input.position(displayWidth/2-60,displayHeight/2-120);
    this.button.position(displayWidth/2+30,displayHeight/2);

    this.greeting.position(130,100);

    this.button.mousePressed(
      ()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount = playerCount+1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("welcome to the gaming world " + player.name);
        this.greeting.position(displayWidth/2,displayHeight/4);
      }
    );
  }

  hide(){
    this.button.hide();
    this.input.hide();
    this.greeting.hide();
  }
}
