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

define( function () {
  "use strict";

  var vendor = {};
  vendor.addWare = function (ware) {
    var existing = false;
    for(var i = 0;i<this.wares.length;i++){
      if(this.wares[i].name === ware.name){
        this.wares[i].amount += ware.amount;
        existing=true;
      }
    }
    if(!existing) {this.wares.push(ware);}
  };
  vendor.removeWare = function (name, amount) {
    var excluder = function (ware) {
      if (ware.name !== name) {
        return ware;
      }
    };

   for(var i = 0;i < this.wares.length;i++) {
      var current = this.wares[i];
      if(current.name === name) {
        var removed_amount = amount || current.amount;
        if (current.amount === removed_amount) {
          this.wares = this.wares.filter(excluder);
        } else {
          this.wares[i].amount -= amount;
        }
        return {
          "name": current.name,
          "amount": removed_amount
          };
      }
    }
  };
  return vendor;
});
