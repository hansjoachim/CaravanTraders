var common = require("./common");

  var player = function() {};
  player.prototype = common;

  player.prototype.travelTo = function(place) {
    this.location = place;
  },

  player.create = function(hometown) {
    var instance = new player();
    instance.wares = [];
    instance.gold = 10;
    instance.location = hometown;
    return instance;
  }

  if (typeof module !== "undefined") {
    module.exports = player;
  } else {
    define(player);
  }
