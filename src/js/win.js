let winInfo = document.getElementById("win-info");

let win = {
  show: function(){
    winInfo.classList.add("win-info--visible");
  },

  hide: function(){
    winInfo.classList.remove("win-info--visible");
  }
}

module.exports = win;
