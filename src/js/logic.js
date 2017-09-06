let toggleClass = require("./toggleClass")

let clickedSimonButtons = [];
let toClickSimonButtons = [];
let counter = 0;

let logic = {
  resetClickedSimonButtons: function(){
    clickedSimonButtons = [];
  },

  getClickedSimonButtons: function(){
    return clickedSimonButtons;
  },

  updateClickedSimonButtons: function(button){
    clickedSimonButtons.push(button);
  },

  getToClickSimonButtons: function(){
    return toClickSimonButtons;
  },

  resetToClickSimonButtons: function(){
    toClickSimonButtons = [];
  },

  addNewSimonSequence: function(){
    this.addNewElementToSequence(this.getRandomNumberInRange());
  },

  getCounter: function(){
    return counter;
  },

  addCounter: function(){
    counter++;
  },

  resetCounter: function(){
    counter = 0;
  },

  getRandomNumberInRange: function(){
    return Math.floor(Math.random() * (4 - 1 + 1)) + 1;
  },

  addNewElementToSequence: function(value){
    this.updaToClickedSimonButtons(value);
  },

  updaToClickedSimonButtons: function(value){
    toClickSimonButtons.push(value);
  },

  playAllButtons: function(){
    this.getToClickSimonButtons().forEach((button, index) => {
      setTimeout(() => {
        this.playButton(button);
      }, 1000*(index+1))
    });
  },

  playButton: function(button){
    toggleClass.toggleProvidedButton(button);
    document.getElementById(String(button)).dispatchEvent(new Event('mousedown'));
  },

  checkIfPlayerClickedGoodButton: function(playerValue, simonValue){
    return playerValue === simonValue ? true : false;
  }
}

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}

module.exports = logic;
