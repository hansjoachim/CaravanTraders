/*jslint indent: 2 */
define(['ware'], function (ware) {
  describe("a ware", function () {
    "use strict";
    it("has a name", function () {
      var banana = ware.create("banana");
      expect(banana.name).toBe("banana");
    });
    it("has an amount", function () {
      var apple = ware.create("apple", 3);
      expect(apple.name).toBe("apple");
      expect(apple.amount).toBe(3);
    });
    it("has default amount of 1", function () {
      var orange = ware.create("orange");
      expect(orange.amount).toBe(1);
    });
  });
});
