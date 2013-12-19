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

    app.controller("CityController", ["$scope", function($scope) {
      $scope.cities = createCities();
      $scope.player = player.create($scope.cities[0]);

      $scope.purchase = function(ware) {
        var purchased = $scope.player.location.removeWare(ware, 1);
        $scope.player.addWare(purchased);
      };

      $scope.sell = function(ware) {
        var sold = $scope.player.removeWare(ware, 1);
        $scope.player.location.addWare(sold);
      };

      $scope.travelTo = function(destination) {
        $scope.player.travelTo(destination);
      }
    }]);

    return app;
});
