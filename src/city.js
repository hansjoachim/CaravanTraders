var city = {
  create: function(name, wares){
    var instance = {};
    instance.name = name;
    instance.wares = wares || [];
    instance.sell = function(name, amount) {
      for(var i = 0;i < this.wares.length;i++) {
        var current = this.wares[i];
        if(current.name === name) {
          if (current.amount === amount) {
            var excluder = function (ware) {
              if (ware.name !== name) {
                return ware;
              }
            };

            this.wares = this.wares.filter(excluder);
          } else {
            this.wares[i].amount -= amount;
          }
          return {"name": current.name, "amount": amount};
        }
      }
    }
    instance.getWareNames = function() {
      var names = [];
      this.wares.forEach(function (ware){
        names.push(ware.name);
      });
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
