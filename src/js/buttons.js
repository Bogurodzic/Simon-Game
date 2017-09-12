var sound = require("./sound");
var player = require("./player");
var toggleClass = require("./toggleClass");


var buttons = {
  init: function(){
    addEventsToButtons();
  },

  button1: getFirstButton(),
  button2: getSecondButton(),
  button3: getThirdButton(),
  button4: getFourthButton(),
  getSimonButtons: getSimonButtons(),
}

function addEventsToButtons(){
  addSimonClickEvent(buttons.button1, 1);
  addSimonClickEvent(buttons.button2, 2);
  addSimonClickEvent(buttons.button3, 3);
  addSimonClickEvent(buttons.button4, 4);
}

function addSimonClickEvent(button, logicValue){
  button.addEventListener("click", button => {
    toggleClass.toggleProvidedButton(logicValue);
    player.playerTurn ? player.doMove(logicValue) : false;
  });
}

function getSimonButtons(){
  return [getFirstButton(), getSecondButton(), getThirdButton(), getFourthButton()];
}

function getFirstButton(){
  return document.getElementById("1");
}

function getSecondButton(){
  return document.getElementById("2");
}

function getThirdButton(){
  return document.getElementById("3");
}

function getFourthButton(){
  return document.getElementById("4");
}

function getEasyButton(){
  return document.getElementById("easy");
}

function getHardButton(){
  return document.getElementById("hard");
}

module.exports = buttons;
