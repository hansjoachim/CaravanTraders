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

define(function () {
  "use strict";

  var Ware = function (name, amount, price) {
    this.name = name;
    this.amount = amount || 1;
    this.price = price || 0;
  };

  Ware.create = function (name, amount, price) {
    return new Ware(name, amount, price);
  };

  return Ware;
});
