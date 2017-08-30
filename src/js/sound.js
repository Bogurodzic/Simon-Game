let howler = require("howler");

var [audio1, audio2, audio3, audio4] = getAllAudio();

function addEventsToButtons(){
  addAudioToButton(getFirstButton(), audio1);
  addAudioToButton(getSecondButton(), audio2);
  addAudioToButton(getThirdButton(), audio3);
  addAudioToButton(getFourthButton(), audio4);
}

function addAudioToButton(button, audio){
  button.addEventListener("mousedown", () => {
    audio.play();
    console.log(audio);
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

var sound = {
  init: function(){
    console.log(audio1, audio2);
    addEventsToButtons();
  }
}



module.exports = sound;
