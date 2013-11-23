var city = require("../src/city");
var ware = require("../src/ware");

var banana = ware.create("banana");

describe("a city", function() {
  it("has a name", function() {
    var some_place = city.create("hello");
    expect(some_place.name).toBe("hello");
  });
  it("has zero wares unless otherwise specified", function() {
    var some_place = city.create("name");
    expect(some_place.wares.length).toBe(0);
  });
  it("can contain wares", function() {
    var some_place = city.create("some_place", [banana]);
    expect(some_place.wares.length).toBe(1);
    expect(some_place.wares[0].name).toBe("banana");
  });
  it("can get an initial list with multiple wares", function() {
    var apple = ware.create("apple");
    var orange = ware.create("orange");
    var city_with_multiple_wares = city.create("multiplexia", [apple, orange]);
    expect(city_with_multiple_wares.wares.length).toEqual(2);
    expect(city_with_multiple_wares.wares).toContain(apple, orange);
  });
  it("can sell a ware", function() {
    var some_place = city.create("some place", [banana]);
    expect(some_place.sell()).toBe(banana);
    expect(some_place.wares.length).toBe(0);
  });
  it("can store different amounts of wares", function() {
    var apples = ware.create("apple", 2);
    var wares= [banana, apples];
    var town = city.create("name", wares);
    expect(town.getWareNames().length).toBe(2);
    expect(town.getWareNames()).toContain("banana", "apple");
    expect(town.wares[0].name).toBe("banana");
    expect(town.wares[0].amount).toBe(1);
    expect(town.wares[1].name).toBe("apple");
    expect(town.wares[1].amount).toBe(2);
  });
});
