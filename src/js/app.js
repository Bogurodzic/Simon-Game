let sound = require("./sound");
let buttons = require("./buttons");
let simon = require("./simon");

document.getElementById("start").addEventListener("click", ()=>simon.startGame());

sound.init();
buttons.init();
