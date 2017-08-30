let howler = require("howler");
let buttons = require("./buttons");

var [audio1, audio2, audio3, audio4] = getAllAudio();

function addEventsToButtons(){
  addAudioToButton(buttons.button1, audio1);
  addAudioToButton(buttons.button2, audio2);
  addAudioToButton(buttons.button3, audio3);
  addAudioToButton(buttons.button4, audio4);
}

function addAudioToButton(button, audio){
  button.addEventListener("mousedown", () => {
    audio.play();
  });
}

function getAllAudio(){
  return getAudioUrls().map(audio => {
    return new Howl({
      src: [audio]
    });
  })
}

function getAudioUrls(){
  return ["audio/simonSound1.mp3", "audio/simonSound2.mp3", "audio/simonSound3.mp3", "audio/simonSound4.mp3"]
}


var sound = {
  init: function(){
    addEventsToButtons();
  }
}



module.exports = sound;
