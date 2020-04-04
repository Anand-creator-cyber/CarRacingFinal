class Player {
  constructor(){

    this.index = null;
    this.name = null;
    this.distance = 0;
    this.rank = null;




  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name, distance:this.distance 
    });
  }

  delete(){
    database.ref('players').set({

      allPlayers : []
    })
    
  }

  getcarsAtEnd(){

    database.ref('carsAtEnd').on("value",(data)=>{

      this.rank = data.val();
    

    })
  }

  static updateRank(Rank){

    database.ref('/').update({

      carsAtEnd : Rank

    })


  }

  static getPlayerinfo(){
      
    var info = database.ref('players');
      
      info.on("value",(data)=>{

        allPlayers = data.val();



      })
  
  }
}
