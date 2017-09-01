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
    logic.updateClickedSimonButtons(value);
    this.checkPlayerMoves();
    this.checkIfItIsLastMove() ? this.endTurn() : false;
  },

  checkPlayerMoves: function(){
    logic.getClickedSimonButtons().forEach((value, index) => {
      logic.checkIfPlayerClickedGoodButton(value, logic.getToClickSimonButtons()[index]) ? true : this.repeatTurn();
    })
  },

  checkIfItIsLastMove: function(){
    return logic.getClickedSimonButtons().length === logic.getToClickSimonButtons().length ? true : false;
  },

  endTurn: function(){
    this.togglePlayerTurn();
    if(simon.newTurn() === true){
      this.togglePlayerTurn();
    }
  },

  repeatTurn: function(){
    this.togglePlayerTurn();
    if(simon.repeatTurn() === true){
      this.togglePlayerTurn();
    }
  }

}

module.exports = player;
