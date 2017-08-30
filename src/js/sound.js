let sound = {
  init: function(){
    console.log(audio1, audio2);
  }
}

var [audio1, audio2, audio3, audio4] = getAllAudio();

function getAllAudio(){
  return getAudioUrls().map(audio => {
    return new Audio(audio);
  })
}

function getAudioUrls(){
  return ["https://s3.amazonaws.com/freecodecamp/simonSound1.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3", "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"]
}

function getSimonButtons(){
  return [getFirstButton(), getSecondButton(), getThirdButton(), getFourthButton()];
}

function getFirstButton(){
  return document.getElementById("1");
}

function getSecondButton(){
  return document.getElementById("1");
}

function getThirdButton(){
  return document.getElementById("1");
}

function getFourthButton(){
  return document.getElementById("1");
}

module.exports = sound;
