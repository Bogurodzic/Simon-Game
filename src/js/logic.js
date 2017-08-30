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

  playSimonSequence: function(){
    this.addNewElementToSequence()
    this.getToClickSimonButtons().forEach(button => {
      this.playButton(button);
    });
  },

  addNewElementToSequence: function(){
    this.updaToClickedSimonButtons(1);
  },

  updaToClickedSimonButtons: function(value){
    toClickSimonButtons.push(value);
  },

  playButton: function(button){
    setTimeout(function(){
      document.getElementById(String(button)).dispatchEvent(new Event('mousedown'));
      //triggerMouseEvent(document.getElementById(String(button)), "mousedown");
    }, 1000)
  }
}

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent ('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}

module.exports = logic;
