var logic = require("./logic");
var simon = require("./simon");

var player = {
  playerTurn: true,

  togglePlayerTurn: function(){
      logic.resetClickedSimonButtons();
      this.playerTurn ? this.playerTurn = false : this.playerTurn = true;
      console.log("now player turn is: " + this.playerTurn);
  },

  blockPlayerTurn(duration){
    setTimeout(()=>{
      this.togglePlayerTurn();
    }, duration*1000);
  },

  doMove: function(value){
    if(this.playerTurn){
      logic.updateClickedSimonButtons(value);
      this.checkPlayerMoves();
      this.checkIfItIsLastMove() ? this.endTurn() : false;
    }
  },

  checkPlayerMoves: function(){
    logic.getClickedSimonButtons().forEach((value, index) => {
      logic.checkIfPlayerClickedGoodButton(value, logic.getToClickSimonButtons()[index]) ? true : this.wrongMove();
    })
  },

  checkIfItIsLastMove: function(){
    return logic.getClickedSimonButtons().length === logic.getToClickSimonButtons().length ? true : false;
  },

  refreshCounter: function(activity){
    activity === "add" ? logic.addCounter() : logic.resetCounter();
    document.getElementById("counter").innerHTML = logic.getCounter();
  },

  endTurn: function(){
    this.togglePlayerTurn();
    this.refreshCounter("add");
    if(simon.newTurn() === true){
      this.togglePlayerTurn();
    }
  },

  repeatTurn: function(){
    this.togglePlayerTurn();
    simon.repeatTurn()
    this.blockPlayerTurn(logic.getToClickSimonButtons().length);
  },

  resetGame: function(){
    this.togglePlayerTurn();
    logic.resetClickedSimonButtons();
    logic.resetToClickSimonButtons();
    if(simon.newTurn() === true){
      this.togglePlayerTurn();
    }
  },

  wrongMove: function(){
    logic.getDifficult() === true ? this.repeatTurn() : this.resetGame();
  }

}

module.exports = player;
