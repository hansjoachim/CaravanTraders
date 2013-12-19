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
    it('has two cities by default', inject(function($controller) {
      var scope = {};
      var ctrl = $controller("CityController", {$scope:scope});
      expect(scope.cities.length).toBe(2);
    }));
  });
});
