var city = {
  create: function(name, wares){
    var instance = {};
    instance.name = name;
    instance.wares = wares || [];
    instance.sell = function() {
      return this.wares.pop();
    }
    instance.getWareNames = function() {
      var names = [];
      for(var i = 0;i < this.wares.length;i++) {
        names.push(this.wares[i].name);
      }
      return names;
    }
    instance.getAmount = function(name) {
      for(var i = 0;i < this.wares.length;i++) {
        if(this.wares[i].name === name) {
          return this.wares[i].amount;
        }
      }
      return 0;
    }
    return instance;
  }
};

if (typeof module !== "undefined") {
  module.exports = city;
} else {
  define(city);
};
