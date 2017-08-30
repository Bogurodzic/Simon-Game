var buttons = {
  button1: getFirstButton(),
  button2: getSecondButton(),
  button3: getThirdButton(),
  button4: getFourthButton(),
  getSimonButtons: getSimonButtons()
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

module.exports = buttons;
