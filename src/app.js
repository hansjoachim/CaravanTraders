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

define(
  ["angular",
   "city",
   "player",
   "ware"],
  function (angular, city, player, ware) {
    "use strict";
    var app = angular.module("app", []);

    var createCities = function () {
      var somewhere = city.create("Somewhere", [ware.create("apple", 1, 5),
                                                ware.create("banana"),
                                                ware.create("orange")]);
      var secondCity = city.create("Otherplace", [ware.create("apple"),
                                                 ware.create("pear")]);
      return [somewhere, secondCity];
    };

    app.controller("CityController", ["$scope", function ($scope) {
      $scope.cities = createCities();
      $scope.player = player.create($scope.cities[0]);

      $scope.buy = function (ware_name) {
        var bought = ware.create(ware_name, 1);
        $scope.player.gold -= $scope.player.location.getWare(ware_name).price;
        $scope.player.addWare(bought);
      };

      $scope.sell = function (ware_name) {
        var sold = $scope.player.removeWare(ware_name, 1);
        //FIXME: add gold
      };

      $scope.travelTo = function (destination) {
        $scope.player.travelTo(destination);
      };
    }]);

    return app;
  }
);
