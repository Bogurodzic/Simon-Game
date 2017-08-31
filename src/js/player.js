var logic = require("./logic");

var player = {
  playerTurn: false,

  togglePlayerTurn: function(){
      this.playerTurn ? this.playerTurn = false : this.playerTurn = true;
      console.log("now player turn is: " + this.playerTurn);
  },

  doMove: function(value){
    this.togglePlayerTurn();
    logic.updateClickedSimonButtons(value);
    this.checkPlayerMoves();
    this.checkIfItIsLastMove() ? console.log("yes") : console.log("no");
    console.log(logic.getClickedSimonButtons());
  },

  checkPlayerMoves: function(){
    logic.getClickedSimonButtons().forEach((value, index) => {
      console.log(value, logic.getToClickSimonButtons()[index]);
    })
  },

  checkIfItIsLastMove: function(){
    return logic.getClickedSimonButtons().length === logic.getToClickSimonButtons().length ? true : false;
  }
}

module.exports = player;
