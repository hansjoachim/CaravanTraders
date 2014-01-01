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
      var somewhere = city.create("Somewhere", [ware.create("apple", 5),
                                                ware.create("banana", 1),
                                                ware.create("orange", 2)]);
      var secondCity = city.create("Otherplace", [ware.create("apple", 2),
                                                 ware.create("pear", 4)]);
      return [somewhere, secondCity];
    };

    app.controller("CityController", ["$scope", function ($scope) {
      $scope.cities = createCities();
      $scope.player = player.create($scope.cities[0]);

      $scope.buy = function (ware) {
        var bought = $scope.player.location.removeWare(ware, 1);
        $scope.player.addWare(bought);
      };

      $scope.sell = function (ware) {
        var sold = $scope.player.removeWare(ware, 1);
        $scope.player.location.addWare(sold);
      };

      $scope.travelTo = function (destination) {
        $scope.player.travelTo(destination);
      };
    }]);

    return app;
  }
);
