/**
 * CaravanTraders
 * Copyright (C) 2013-2014 Hans Joachim Desserud

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

define(['city', 'ware'], function (city, ware) {
  "use strict";
  var apples = ware.create("apple", 2);
  var banana = ware.create("banana");
  var orange = ware.create("orange");

  describe("a city", function () {
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
    it("has a list of the wares in stock", function () {
      var wares = [banana, orange];
      var town = city.create("name", wares);
      expect(town.getWareNames().length).toBe(2);
      expect(town.getWareNames()).toContain("banana");
      expect(town.getWareNames()).toContain("orange");
    });
    //TODO: cities are considered to have an infinte amount of wares
    //replace with boolean?
    it("can get the amount of a ware", function () {
      var some_place = city.create("some place", [banana, apples]);
      expect(some_place.getAmount("banana")).toBe(1);
      expect(some_place.getAmount("apple")).toBe(2);
    });
    it("can say it has zero of a ware it doesn't have in stock", function () {
      var some_place = city.create("some place", []);
      expect(some_place.getAmount("banana")).toBe(0);
    });
  });
});
