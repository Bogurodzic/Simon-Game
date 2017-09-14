var logic = require("./logic");

var simon = {
  newTurn: function(){
    logic.addNewSimonSequence();
    logic.playAllButtons();
    console.log("New simon buttons: " + logic.getToClickSimonButtons())
    return true;
  },

  startGame: function(){
    this.resetGame();
    this.newTurn();
    return true;
  },

  repeatTurn: function(){
    logic.playAllButtons();
    console.log("Old simon buttons: " + logic.getToClickSimonButtons())
  },

  resetGame: function(){
    logic.resetClickedSimonButtons();
    logic.resetToClickSimonButtons();
    document.getElementById("counter").innterHTML = 0;
  }
}

module.exports = simon;
