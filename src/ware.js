/*jslint indent: 2*/
define(function() {
  "use strict";

  var ware = {};
  ware.create = function (name, amount) {
    var instance = {};
    instance.name = name;
    if (typeof amount !== "undefined") {
      instance.amount = amount;
    } else {
      instance.amount = 1;
    }
    return instance;
  }

  return ware;
});
