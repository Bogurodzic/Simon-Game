var toggleClass = {
  toggleProvidedButton: function(number){
    switch(number) {
        case 1:
            this.toggleTopLeft();
            break;
        case 2:
            this.toggleTopRight();
            break;
        case 3:
            this.toggleBottomLeft();
            break;
        case 4:
            this.toggleBottomRight();
            break;
    }
  },
  toggleTopLeft: function(){
    document.getElementById("1").classList.toggle("game-board__top-left--active");
    setTimeout(()=>{document.getElementById("1").classList.toggle("game-board__top-left--active")},600)
  },
  toggleTopRight: function(){
    document.getElementById("2").classList.toggle("game-board__top-right--active");
    setTimeout(()=>{document.getElementById("2").classList.toggle("game-board__top-right--active")},600)
  },
  toggleBottomLeft: function(){
    document.getElementById("3").classList.toggle("game-board__bottom-left--active");
    setTimeout(()=>{document.getElementById("3").classList.toggle("game-board__bottom-left--active")},600)
  },
  toggleBottomRight: function(){
    document.getElementById("4").classList.toggle("game-board__bottom-right--active");
    setTimeout(()=>{document.getElementById("4").classList.toggle("game-board__bottom-right--active")},600)
  },
}


module.exports = toggleClass;
