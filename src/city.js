define(['vendor'], function (vendor) {
  "use strict";

  var City = function (name, wares) {
    this.name = name;
    this.wares = wares;
  };

  City.prototype = vendor;

  City.prototype.getWareNames = function () {
    var names = [];
    this.wares.forEach(function (ware) {
      names.push(ware.name);
    });
    return names;
  };

  City.prototype.getAmount = function (name) {
    for(var i = 0;i < this.wares.length;i++) {
      if(this.wares[i].name === name) {
        return this.wares[i].amount;
      }
    }
    return 0;
  };

  City.create = function (name, wares) {
    return new City(
      name,
      wares || []
      );
  };

  return City;
});
