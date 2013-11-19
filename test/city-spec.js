var city = require("../src/city");

describe("a city", function() {
  it("has a name", function() {
    expect(city.name).toBe("hello");
  });
  it("has wares", function() {
    expect(city.wares).not.toBe(undefined);
  });
});
