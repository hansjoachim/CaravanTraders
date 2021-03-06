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

  var City = function (name, wares) {
    this.name = name;
    this.wares = wares;
  };

  City.prototype = new vendor();

  City.create = function (name, wares) {
    return new City(
      name,
      wares || []
      );
  };

  City.prototype.getWare = function (ware_name) {
    for(var ware in this.wares) {
      if (this.wares[ware].name === ware_name) {
        return this.wares[ware];
      }
    }
    return null;
  };

  return City;
});
