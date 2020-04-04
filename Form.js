class Form {
  constructor() {
    this.input = createInput("name");
    this.button = createButton("play");
    this.greeting = createElement("h2");
    this.button2 = createButton("reset");
    
  }

  hide(){
    this.greeting.hide();
    this.input.hide();
    this.button.hide();
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth / 2 - 48, displayHeight / 2 - 160-50);
    

    
    this.input.position(displayWidth / 2-48 -20, displayHeight / 2 -160+45);
    this.button.position(displayWidth / 2 - 48 + 175, displayHeight / 2 -160+ 45);
    this.button2.position(displayWidth / 2 - 48 + 150, displayHeight / 2 -160 + 200);

    this.button.mousePressed(()=>{

    
      title.hide();
      this.input.hide();
      this.button.hide();

     player.name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      this.greeting.html("Hello " + player.name );
      this.greeting.position(displayWidth / 2 - 48, displayHeight / 2-160);
    });

    this.button2.mousePressed(()=>{

      player.updateCount(0);
      game.update(0);
      player.delete();

    });

}

}
