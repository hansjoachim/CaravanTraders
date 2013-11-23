define(
  ["angular",
   "city",
   "player",
   "ware"],
  function (angular) {
    var app = angular.module("app", []);
     
    app.controller("CityController", ["$scope", function($scope) {
      var somewhere = city.create("Somewhere", [ware.create("apple", 5),
                                               ware.create("banana", 1),
                                               ware.create("orange", 2)]); 

      $scope.city = somewhere;
      $scope.player = player.create(somewhere);

      $scope.purchase = function(ware) {
        var purchased = $scope.city.sell(ware, 1);
        console.log("Player bought " + purchased.amount + " " + purchased.name);
    };
    }]);

    return angular.module("app");
});
