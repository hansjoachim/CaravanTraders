require.config({
  paths: {
    angular: '../dependencies/angular'
  },
  shim: {
    'angular': {'exports': 'angular'}
  }
});

require(["angular", "city"], function(angular, city) {
//  angular.bootstrap(document);

  /*  function CityController($scope) {
      $scope.city = {wares: ["foo", "bar"]}
    }*/
  var some_place = city.create(["something", "something else", "yet another thing"]);
  console.log(some_place.wares);
});
