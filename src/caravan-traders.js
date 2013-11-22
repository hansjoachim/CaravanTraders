define(function(require) {
  var angular = require(["../dependencies/angular"]);
  var city = require("city");
  /*  function CityController($scope) {
      $scope.city = {wares: ["foo", "bar"]}
    }*/

  var some_place = city.create(["something", "something else", "yet another thing"]);
  console.log(some_place.wares);
});
