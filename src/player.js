define(['vendor'], function (vendor) {
  "use strict";

  var Player = function (starting_place) {
    this.location = starting_place;
    this.wares = [];
    this.gold = 10;
  };
  Player.prototype = vendor;

  Player.prototype.travelTo = function (place) {
    this.location = place;
  };

  Player.create = function (stating_place) {
    return new Player(stating_place);
  };

  return Player;
});
