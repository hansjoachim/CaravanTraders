//TODO: better name
var common = {
  addWare : function (ware) {
    var existing = false;
    for(var i = 0;i<this.wares.length;i++){
      if(this.wares[i].name === ware.name){
        this.wares[i].amount += ware.amount;
        existing=true;
      }
    }
    if(!existing) {this.wares.push(ware);}
  },
  removeWare : function (name, amount) {
    for(var i = 0;i < this.wares.length;i++) {
      var current = this.wares[i];
      if(current.name === name) {
        removed_amount = amount || current.amount;
        if (current.amount === removed_amount) {
          var excluder = function (ware) {
            if (ware.name !== name) {
              return ware;
            }
          };

          this.wares = this.wares.filter(excluder);
        } else {
          this.wares[i].amount -= amount;
        }
        return {
          "name": current.name,
          "amount": removed_amount
          };
      }
    }
  }
};

if (typeof module !== "undefined") {
  module.exports = common;
} else {
  define(common);
}
