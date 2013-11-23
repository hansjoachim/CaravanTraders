var ware = {
  create: function(name, amount) {
    this.name = name;
    if (typeof amount !== "undefined") {
      this.amount = amount;
    } else {
      this.amount = 1;
    }
    return this;
  },
  name: function() {
    return this.name;
  },
  amount: function() {
    return this.amount;
  }
}

if (typeof module !== "undefined") {
  module.exports = ware;
} else {
  define(ware);
};
