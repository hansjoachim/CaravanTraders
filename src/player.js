define(['vendor'], function (vendor) {
  "use strict";

  var player = function () {};
  player.prototype = vendor;

  player.prototype.travelTo = function (place) {
    this.location = place;
  };

  player.create = function (hometown) {
    var instance = new player();
    instance.wares = [];
    instance.gold = 10;
    instance.location = hometown;
    return instance;
  };
  return player;
});
