var logic = require("./logic");
var simon = require("./simon");

var player = {
  playerTurn: true,

  togglePlayerTurn: function(){
      logic.resetClickedSimonButtons();
      this.playerTurn ? this.playerTurn = false : this.playerTurn = true;
      console.log("now player turn is: " + this.playerTurn);
  },

  doMove: function(value){
    console.log(logic.getClickedSimonButtons())
    logic.updateClickedSimonButtons(value);
    this.checkPlayerMoves();
    this.checkIfItIsLastMove() ? this.endTurn() : false;
    //console.log(logic.getClickedSimonButtons());
  },

  checkPlayerMoves: function(){
    logic.getClickedSimonButtons().forEach((value, index) => {
      console.log(value, logic.getToClickSimonButtons()[index]);
    })
  },

  checkIfItIsLastMove: function(){
    return logic.getClickedSimonButtons().length === logic.getToClickSimonButtons().length ? true : false;
  },

  endTurn: function(){
    this.togglePlayerTurn();
    if(simon.newTurn() === true){
      console.log("XD");
      this.togglePlayerTurn();
    } else{
      console.log(";/")
    }
    console.log("powinno sie skonczyc...")
  }
}

module.exports = player;
