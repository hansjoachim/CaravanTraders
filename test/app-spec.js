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

define(['angularmocks', 'app'], function (mock, app) {
  "use strict";
  describe('app', function () {
    beforeEach(mock.module('app'));

    var scope = {};
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('CityController', {$scope:scope});
    }));

    it('creates two cities by default', function () {
      expect(scope.cities.length).toBe(2);
    });
    it('creates a player by default', function () {
      expect(scope.player.gold).toBe(10);
      expect(scope.player.wares.length).toBe(0);
    });
    it('allows a player to travel to another place', function () {
      var starting_place = scope.player.location;
      scope.travelTo(scope.cities[1]);
      expect(scope.player.location).not.toBe(starting_place);
    });
    it('allows a player to buy an item', function() {
      //TODO: somewhat assumes that player is currently in cities[0]
      var ware = scope.cities[0].wares[0];
      var ware_name = ware.name;
      scope.buy(ware_name);
      expect(scope.player.wares.length).toBe(1);
      expect(scope.player.wares[0].name).toBe(ware_name);
      expect(scope.player.wares[0].amount).toBe(1);
      expect(scope.player.gold).toBe(5);
    });
    it('prevents player from buying something when out of gold', function() {
      var ware = scope.cities[0].wares[0];
      var ware_name = ware.name;
      scope.buy(ware_name);
      scope.buy(ware_name);
      expect(scope.player.gold).toBe(0);
      expect(function () {scope.buy(ware_name)}).toThrow(new Error("Too expensive"));
    });
    it('prevents player from buying when the ware is too expensive', function() {
      var ware = scope.cities[0].wares[1];
      var ware_name = ware.name;

      expect(function () {scope.buy(ware_name)}).toThrow(new Error("Too expensive"));
    });
    it('allows a player to sell an item', function() {
       //TODO: somewhat assumes that player is currently in cities[0]
      var ware = scope.cities[0].wares[0];
      var ware_name = ware.name;
      scope.player.wares = [{name: ware_name, amount: 2}];
      scope.sell(ware_name);
      expect(scope.player.wares[0].amount).toBe(1);
      //TODO: have more gold
    });
  });
});
