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
       var playerCountRef = await database.ref('playerCount').once("value"); 
       if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
           player.getCount(); 
          
          } 
          
          form = new Form() 
          form.display(); 
        
        } 

        car1 = createSprite(400,600,100,100);
        car2 = createSprite(600,600,100,100);
        car3 = createSprite(800,600,100,100);
        car4 = createSprite(100,600,100,100);

        car1.addImage("1st Car",c1);
        car2.addImage("2nd Car",c2);
        car3.addImage("3rd Car",c3);
        car4.addImage("4th Car",c4);

        cars = [car1,car2,car3,car4];
        


      }

  play(){

    background("#c68767");
    image(r1,0,-displayHeight * 4,displayWidth,displayHeight * 5);

    form.hide();
    //text("Game Starts",120,200);
    Player.getPlayerinfo();
    player.getcarsAtEnd();
    if(allPlayers !== undefined){  
     var index = 0;
     var x = 200;
     var y;
      for(var plr in allPlayers){ 

        index+=1;
        x = x+300;
        y = displayHeight - allPlayers[plr].distance;

        cars[index-1].x = x;
        cars[index-1].y = y;

        if(index === player.index){

         fill("maroon");
          ellipse(x,y,20,50);

          camera.position.x = displayWidth / 2 - 48;
          camera.position.y = cars[index-1].y;


        



        }

        

      
       
        
      } 
    }

       if(keyIsDown(UP_ARROW)&&player.index !== null){
          
        player.distance+=50;
        player.update();

       }

       if(player.distance === 5100){
        gameState = 2;
        player.rank+=1
        Player.updateRank(player.rank);
                
      }

          drawSprites();
      }

      end(){

        console.log(player.rank);
        
       
      }

      
  }

