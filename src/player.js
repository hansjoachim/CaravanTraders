var player = {
  create: function(hometown) {
    var instance = {};
    instance.wares = [];
    instance.gold = 10;
    instance.location = hometown;

    instance.travelTo = function(place) {
      instance.location = place;
    };

    return instance;
  }
}

if (typeof module !== "undefined") {
  module.exports = player;
} else {
  define(player);
}
