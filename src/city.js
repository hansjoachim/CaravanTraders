define(['common'], function (common) {

var city = function () {};
city.prototype = common;

city.create = function (name, wares){
  var instance = new city();
  instance.name = name;
  instance.wares = wares || [];
  return instance;
};

city.prototype.getWareNames = function () {
  var names = [];
  this.wares.forEach(function (ware){
    names.push(ware.name);
  });
  return names;
};
city.prototype.getAmount = function (name) {
  for(var i = 0;i < this.wares.length;i++) {
    if(this.wares[i].name === name) {
      return this.wares[i].amount;
    }
  }
  return 0;
};

return city;
});
