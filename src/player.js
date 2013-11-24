var player = {
  create: function(hometown) {
    var instance = {};
    instance.wares = [];
    instance.gold = 10;
    instance.location = hometown;

    instance.travelTo = function(place) {
      instance.location = place;
    };
    instance.addWare = function(ware) {
      var existing = false;
      for(var i = 0;i<this.wares.length;i++){
        if(this.wares[i].name === ware.name){
          this.wares[i].amount += ware.amount;
          existing=true;
        }
      }

      if(!existing) {this.wares.push(ware);}
    }

    return instance;
  }
}

if (typeof module !== "undefined") {
  module.exports = player;
} else {
  define(player);
}
