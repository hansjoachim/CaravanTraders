define(
  ["angular",
   "city",
   "ware"],
  function (angular) {
    var app = angular.module("app", []);
     
    app.controller("CityController", ["$scope", function($scope) {
      $scope.city = city.create("Somewhere", [ware.create("apple", 5),
                                              ware.create("banana", 1),
                                              ware.create("orange", 2)]);  
    }]);

    return angular.module("app");
});
