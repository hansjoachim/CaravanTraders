define(function () {
  "use strict";

  var Ware = function (name, amount, cost) {
    this.name = name;
    this.amount = amount || 1;
    this.cost = cost || 0;
  };

  Ware.create = function (name, amount, cost) {
    return new Ware(name, amount, cost);
  };

  return Ware;
});
