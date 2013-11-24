(function () {
  var Player = function() {};

  Player.create = function(hometown) {
    var instance = new Player();
    instance.wares = [];
    instance.gold = 10;
    instance.location = hometown;
    return instance;
  }

  Player.prototype.travelTo = function travelTo(place) {
    this.location = place;
  };

  Player.prototype.addWare = function(ware) {
    var existing = false;
    for(var i = 0;i<this.wares.length;i++){
      if(this.wares[i].name === ware.name){
        this.wares[i].amount += ware.amount;
        existing=true;
      }
    }
    if(!existing) {this.wares.push(ware);}
  }

  if (typeof module !== "undefined") {
    module.exports = Player;
  } else {
    define(Player);
  }
})();
