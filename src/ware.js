/*jslint indent: 2*/
define(function() {
  "use strict";

  var Ware = function (name, amount) {
    this.name = name;
    this.amount = amount;
  };

  Ware.create = function (name, amount) {
    if (typeof amount !== "undefined") {
      return new Ware(name, amount);
    } else {
      return new Ware(name, 1);
    }
  }

  return Ware;
});
