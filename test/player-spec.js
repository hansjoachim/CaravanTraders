/*jslint indent: 2 */
define(['city', 'player', 'ware'], function (city, player, ware) {

var p1 = player.create(city.create("starting point"));

describe("player", function () {
  "use strict";
  it("starts with an empty list of wares", function () {
    expect(p1.wares.length).toBe(0);
  });
  it("starts with 10 gold", function () {
    expect(p1.gold).toBe(10);
  });
  it("knows the current location", function () {
    expect(p1.location.name).toBe("starting point");
  });
  it("can travel", function () {
    p1.travelTo(city.create("somewhere else"));
    expect(p1.location.name).toBe("somewhere else");
  });
  it("can gain a ware", function () {
    p1.addWare(ware.create("banana"));
    expect(p1.wares.length).toBe(1);
    expect(p1.wares[0].name).toBe("banana");
    expect(p1.wares[0].amount).toBe(1);
  });
  it("can gain multiple wares", function () {
    var trader = player.create(city.create("Someplace"));
    trader.addWare(ware.create("apple"));
    trader.addWare(ware.create("orange"));
    expect(trader.wares.length).toBe(2);
    expect(trader.wares[0].name).toBe("apple");
    expect(trader.wares[0].amount).toBe(1);
    expect(trader.wares[1].name).toBe("orange");
    expect(trader.wares[1].amount).toBe(1);
  });
  it("will stack wares of the same type when receiving more", function () {
  "use strict";
    var a_banana = ware.create("banana");
    var another_banana = ware.create("banana");
    var trader = player.create(city.create("Someplace"));
    trader.addWare(a_banana);
    trader.addWare(another_banana);
    expect(trader.wares.length).toBe(1);
    expect(trader.wares[0].name).toBe("banana");
    expect(trader.wares[0].amount).toBe(2);
  });
});
});
