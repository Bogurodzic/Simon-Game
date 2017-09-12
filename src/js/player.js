var logic = require("./logic");
var simon = require("./simon");
var CountUp = require("countup.js");


var options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
};

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
    var fromCount=logic.getCounter();

    activity === "add" ? logic.addCounter() : logic.resetCounter();

    var toCount=logic.getCounter();

    var counter = new CountUp("counter", fromCount, toCount, 0, 2.5, options);
    !counter.error ? counter.start() : console.error(counter.error);
  },

  endTurn: function(){
    this.togglePlayerTurn();
    this.refreshCounter("add");
    this.blockPlayerTurn(logic.getToClickSimonButtons().length + 1);
    simon.newTurn();

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
    this.refreshCounter("reset");
    this.blockPlayerTurn(logic.getToClickSimonButtons().length + 1);
    simon.newTurn();
  },

  wrongMove: function(){
    logic.getDifficult() === true ? this.repeatTurn() : this.resetGame();
  }

}

module.exports = player;
