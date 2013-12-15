/*jslint indent: 2*/
define(function() {
  var ware = function () {};
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
