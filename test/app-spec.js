define(['angular', 'angularmocks'], function (angular, angularmocks) {
  "use strict";
  describe('app', function () {
    beforeEach(angularmocks.module('app'));

    it('has angular available', function () {
      expect(angular).not.toBe(undefined);
    });
    it('has angularmocks available too', function() {
      expect(angularmocks).not.toBe(undefined);
    });
    it('creates two cities by default', inject(function($controller) {
      var scope = {};
      var ctrl = $controller("CityController", {$scope:scope});
      expect(scope.cities.length).toBe(2);
    }));
    it('creates a player by default', inject(function($controller) {
      var scope = {};
      var ctrl = $controller("CityController", {$scope:scope});
      expect(scope.player.gold).toBe(10);
      expect(scope.player.wares.length).toBe(0);
    }));
    it('allows a player to travel to another place', inject(function($controller) {
      var scope = {};
      var ctrl = $controller("CityController", {$scope:scope});
      var starting_place = scope.player.location;
      scope.travelTo(scope.cities[1]);
      expect(scope.player.location).not.toBe(starting_place);
    }));

  });
});
