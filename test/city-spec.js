/*jslint indent: 2 */
define(['city', 'ware'], function (city, ware) {
var apples = ware.create("apple", 2);
var banana = ware.create("banana");
var orange = ware.create("orange");

describe("a city", function () {
  "use strict";
  it("has a name", function () {
    var some_place = city.create("hello");
    expect(some_place.name).toBe("hello");
  });
  it("has zero wares unless otherwise specified", function () {
    var some_place = city.create("name");
    expect(some_place.wares.length).toBe(0);
  });
  it("can contain wares", function () {
    var some_place = city.create("some_place", [banana]);
    expect(some_place.wares.length).toBe(1);
    expect(some_place.wares[0].name).toBe("banana");
  });
  it("can get an initial list with multiple wares", function () {
    var pear = ware.create("pear");
    var city_with_multiple_wares = city.create("multiplexia", [orange, pear]);
    expect(city_with_multiple_wares.wares.length).toEqual(2);
    expect(city_with_multiple_wares.wares).toContain(orange);
    expect(city_with_multiple_wares.wares).toContain(pear);
  });
  it("can remove some of a ware", function () {
    var bananas = ware.create("banana", 3);
    var some_place = city.create("some place", [bananas]);
    var sold = some_place.removeWare("banana", 2);
    expect(sold.name).toBe("banana");
    expect(sold.amount).toBe(2);
    expect(some_place.wares.length).toBe(1);
    expect(some_place.getAmount("banana")).toBe(1);
  });
  it("will stop listing a ware if all of it is removed", function () {
    var some_place = city.create("some place", [banana]);
    var sold = some_place.removeWare("banana", 1);
    expect(sold.name).toBe("banana");
    expect(sold.amount).toBe(1);
    expect(some_place.wares.length).toBe(0);
  });
  it("can remove all of one ware without impacting the others", function () {
    var place = city.create("name", [banana, apples]);
    var all_apples = place.removeWare("apple", 2);
    expect(all_apples.name).toBe("apple");
    expect(all_apples.amount).toBe(2);
    expect(place.wares.length).toBe(1);
    expect(place.getWareNames()).not.toContain("apple");
    expect(place.getWareNames()).toContain("banana");
  });
  it("will remove all of a ware if an amount is not specified", function () {
    var place = city.create("name", [orange, apples]);
    var all_apples = place.removeWare("apple");
    expect(all_apples.name).toBe("apple");
    expect(all_apples.amount).toBe(2);
    expect(place.wares.length).toBe(1);
    expect(place.getWareNames()).toContain("orange");
  });
   //TODO: long-term: combine buying/selling in a purchase-object
  //TODO: should throw an exception if I attempt to remove a ware I don't have
  //TODO: ditto for attempting to remove a too large amount
  it("has a list of the wares in stock", function () {
    var wares = [banana, orange];
    var town = city.create("name", wares);
    expect(town.getWareNames().length).toBe(2);
    expect(town.getWareNames()).toContain("banana");
    expect(town.getWareNames()).toContain("orange");
  });
  it("can get the amount of a ware", function () {
    var some_place = city.create("some place", [banana, apples]);
    expect(some_place.getAmount("banana")).toBe(1);
    expect(some_place.getAmount("apple")).toBe(2);
  });
  it("can say it has zero of a ware it doesn't have in stock", function () {
    var some_place = city.create("some place", []);
    expect(some_place.getAmount("banana")).toBe(0);
  });
  it("can store different amounts of wares", function () {
    var wares = [banana, apples];
    var town = city.create("name", wares);
    expect(town.wares[0].name).toBe("banana");
    expect(town.wares[0].amount).toBe(1);
    expect(town.wares[1].name).toBe("apple");
    expect(town.wares[1].amount).toBe(2);
  });
});
});
