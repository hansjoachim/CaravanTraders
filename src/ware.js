define(function () {
  "use strict";

  var Ware = function (name, amount) {
    this.name = name;
    this.amount = amount;
  };

  Ware.create = function (name, amount) {
    if (amount === undefined) {
      return new Ware(name, 1);
    }
    return new Ware(name, amount);
  };

  return Ware;
});
