var logic = require("./logic");
//var player = require("./player");

var simon = {
  newTurn: function(){
    console.log("Simon TURN!")
    logic.addNewSimonSequence();
    logic.playAllButtons();
    console.log("New simon buttons: " + logic.getToClickSimonButtons())
    return true;

  }
}

module.exports = simon;
