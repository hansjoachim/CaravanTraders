  var player = function() {};

  player.create = function(hometown) {
    var instance = new player();
    instance.wares = [];
    instance.gold = 10;
    instance.location = hometown;
    return instance;
  }

  player.prototype.travelTo = function travelTo(place) {
    this.location = place;
  };

  player.prototype.addWare = function(ware) {
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
    module.exports = player;
  } else {
    define(player);
  }
