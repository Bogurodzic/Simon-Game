var logic = require("./logic");

var player = {
  doMove: function(value){
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
