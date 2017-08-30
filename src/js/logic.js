let clickedSimonButtons = [];
let toClickSimonButtons = [];

let logic = {
  resetClickedSimonButtons: function(){
    clickedSimonButtons = [];
  },

  getClickedSimonButtons: function(){
    return clickedSimonButtons;
  },

  updateClickedSimonButtons: function(button){
    clickedSimonButtons.push(button);
    console.log(clickedSimonButtons);
  },

  getToClickSimonButtons: function(){
    return toClickSimonButtons;
  },

  resetToClickSimonButtons: function(){
    toClickSimonButtons = [];
  },

  playSimonSequence: function(value){
    this.addNewElementToSequence(value)
    this.playAllButtons();
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
    document.getElementById(String(button)).dispatchEvent(new Event('mousedown'));
  }
}

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}

module.exports = logic;
