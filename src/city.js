var city = {
  //TODO: expand wares to contain amount
  create: function(wares){
    this.wares = wares;
    return this;
  },
  name: "hello",
/*  wares: function() {
    return this.wares
  },*/
  sell: function() {
    return this.wares.pop();
  }
};

if (typeof module !== "undefined") {
  module.exports = city;
} else {
  define(city);
};
