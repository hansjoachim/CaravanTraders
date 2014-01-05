/**
 * CaravanTraders
 * Copyright (C) 2013-2014 Hans Joachim Desserud

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

define(['vendor'], function (vendor) {
  "use strict";

  var Player = function (starting_place) {
    this.location = starting_place;
    this.wares = [];
    this.gold = 10;
  };

  Player.prototype = new vendor();

  Player.prototype.travelTo = function (place) {
    this.location = place;
  };

  Player.create = function (stating_place) {
    return new Player(stating_place);
  };

  return Player;
});
