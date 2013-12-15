define(
  ["angular",
   "common",
   "city",
   "player",
   "ware"],
  function (angular) {
    var app = angular.module("app", []);
     
    app.controller("CityController", ["$scope", function($scope) {
      var somewhere = city.create("Somewhere", [ware.create("apple", 5),
                                                ware.create("banana", 1),
                                                ware.create("orange", 2)]); 
      var secondCity = city.create("Otherplace", [ware.create("apple", 2),
                                                 ware.create("pear", 4)]);

      $scope.city = somewhere;
      $scope.player = player.create(somewhere);

      $scope.purchase = function(ware) {
        var purchased = $scope.city.removeWare(ware, 1);
        $scope.player.addWare(purchased);
      };
      $scope.sell = function(ware) {
        var sold = $scope.player.removeWare(ware, 1);
        $scope.city.addWare(sold);
      };
    }]);

    return angular.module("app");
});
