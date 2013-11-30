//TODO: better name
var common = {
  addWare : function(ware) {
    var existing = false;
    for(var i = 0;i<this.wares.length;i++){
      if(this.wares[i].name === ware.name){
        this.wares[i].amount += ware.amount;
        existing=true;
      }
    }
    if(!existing) {this.wares.push(ware);}
  }
}

if (typeof module !== "undefined") {
  module.exports = common;
} else {
  define(common);
}
