var logic = require("./logic");

var simon = {
  newTurn: function(){
    logic.addNewSimonSequence();
    logic.playAllButtons();
    console.log("New simon buttons: " + logic.getToClickSimonButtons())
    return true;

  }
}

module.exports = simon;
