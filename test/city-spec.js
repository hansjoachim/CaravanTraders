var city = require("../src/city");

some_place = city.create(["a banana"]);

describe("a city", function() {
  it("has a name", function() {
    expect(some_place.name).toBe("hello");
  });
  it("has wares", function() {
    expect(some_place.wares.length).toBe(1);
    expect(some_place.wares[0]).toBe("a banana");
  });
  it("can sell a ware", function() {
    expect(some_place.sell()).toBe("a banana");
    expect(some_place.wares.length).toBe(0);
  });
  it("can get an initial list of wares", function() {
    var city_with_multiple_wares = city.create(["an apple", "an orange"]);
    expect(city_with_multiple_wares.wares).toEqual(["an apple", "an orange"]);
  });
});
