var ware = {
  create: function(name, amount) {
    var instance = {}
    instance.name = name;
    if (typeof amount !== "undefined") {
      instance.amount = amount;
    } else {
      instance.amount = 1;
    }
    return instance;
  }
}

if (typeof module !== "undefined") {
  module.exports = ware;
} else {
  define(ware);
};
