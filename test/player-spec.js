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

define(['city', 'player', 'ware'], function (city, player, ware) {
  "use strict";
  var apples = ware.create("apple", 2);
  var banana = ware.create("banana");
  var orange = ware.create("orange");
  var starting_point = city.create("starting point");
  var player1 = {};

  beforeEach(function () {
    player1 = player.create(starting_point);
  });

  describe("player", function () {
    it("starts with an empty list of wares", function () {
      expect(player1.wares.length).toBe(0);
    });
    it("starts with 10 gold", function () {
      expect(player1.gold).toBe(10);
    });
    it("knows the current location", function () {
      expect(player1.location.name).toBe("starting point");
    });
    it("can travel", function () {
      player1.travelTo(city.create("somewhere else"));
      expect(player1.location.name).toBe("somewhere else");
    });
    it("can gain a ware", function () {
      player1.addWare(banana);
      expect(player1.wares.length).toBe(1);
      expect(player1.wares[0].name).toBe("banana");
      expect(player1.wares[0].amount).toBe(1);
    });
    it("can gain multiple wares", function () {
      player1.addWare(ware.create("apple"));
      player1.addWare(orange);
      expect(player1.wares.length).toBe(2);
      expect(player1.wares[0].name).toBe("apple");
      expect(player1.wares[0].amount).toBe(1);
      expect(player1.wares[1].name).toBe("orange");
      expect(player1.wares[1].amount).toBe(1);
    });
    it("will stack wares of the same type when receiving more", function () {
      var a_banana = ware.create("banana");
      var another_banana = ware.create("banana");
      player1.addWare(a_banana);
      player1.addWare(another_banana);
      expect(player1.wares.length).toBe(1);
      expect(player1.wares[0].name).toBe("banana");
      expect(player1.wares[0].amount).toBe(2);
    });
    it("can remove some of a ware", function () {
      var bananas = ware.create("banana", 3);
      player1.wares = [bananas];
      var sold = player1.removeWare("banana", 2);
      expect(sold.name).toBe("banana");
      expect(sold.amount).toBe(2);
      expect(player1.wares.length).toBe(1);
      expect(player1.getAmount("banana")).toBe(1);
    });
    it("will stop listing a ware if all of it is removed", function () {
      player1.wares = [banana];
      var sold = player1.removeWare("banana", 1);
      expect(sold.name).toBe("banana");
      expect(sold.amount).toBe(1);
      expect(player1.wares.length).toBe(0);
    });
    it("can remove all of one ware without impacting the others", function () {
      player1.wares = [banana, apples];
      var all_apples = player1.removeWare("apple", 2);
      expect(all_apples.name).toBe("apple");
      expect(all_apples.amount).toBe(2);
      expect(player1.wares.length).toBe(1);
      expect(player1.getWareNames()).not.toContain("apple");
      expect(player1.getWareNames()).toContain("banana");
    });
    it("will remove all of a ware if an amount is not specified", function () {
      player1.wares = [orange, apples];
      var all_apples = player1.removeWare("apple");
      expect(all_apples.name).toBe("apple");
      expect(all_apples.amount).toBe(2);
      expect(player1.wares.length).toBe(1);
      expect(player1.getWareNames()).toContain("orange");
    });
    //TODO: should throw an exception if I attempt to remove a ware I don't have
    //TODO: ditto for attempting to remove a too large amount
  });
});
