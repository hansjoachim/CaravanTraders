define(
  ["angular",
   "city",
   "player",
   "ware"],
  function (angular, player) {
    var app = angular.module("app", []);
     
    app.controller("CityController", ["$scope", function($scope) {
      var somewhere = city.create("Somewhere", [ware.create("apple", 5),
                                               ware.create("banana", 1),
                                               ware.create("orange", 2)]); 

      $scope.city = somewhere;
      $scope.player = player.create(somewhere);

      $scope.purchase = function(ware) {
        var purchased = $scope.city.removeWare(ware, 1);
        $scope.player.addWare(purchased);
      };
    }]);

    return angular.module("app");
});
