var city = require("../src/city");
var player = require("../src/player");

var p1 = player.create(city.create("starting point"));

describe("player", function() {
  it("starts with an empty list of wares", function() {
    expect(p1.wares.length).toBe(0);
  });
  it("starts with 10 gold", function() {
    expect(p1.gold).toBe(10);
  });
  it("knows the current location", function() {
    expect(p1.location.name).toBe("starting point");
  });
  it("can travel", function() {
    p1.travelTo(city.create("somewhere else"));
    expect(p1.location.name).toBe("somewhere else");
  });
});
