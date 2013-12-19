define(['angularmocks'], function (mock) {
  "use strict";
  describe('app', function () {
    beforeEach(mock.module('app'));

    var scope, ctrl;
    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('CityController', {$scope:scope});
    }));

    it('creates two cities by default', inject(function($controller) {
      expect(scope.cities.length).toBe(2);
    }));
    it('creates a player by default', inject(function($controller) {
      expect(scope.player.gold).toBe(10);
      expect(scope.player.wares.length).toBe(0);
    }));
    it('allows a player to travel to another place', inject(function($controller) {
      var starting_place = scope.player.location;
      scope.travelTo(scope.cities[1]);
      expect(scope.player.location).not.toBe(starting_place);
    }));
  });
});
