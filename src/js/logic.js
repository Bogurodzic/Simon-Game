let clickedSimonButtons = [];

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
  }
}

module.exports = logic;
