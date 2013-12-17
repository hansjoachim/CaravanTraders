define(['angular', 'angularmocks'], function (angular, angularmocks) {
  "use strict";
  describe('app', function () {
    it('has angular available', function () {
      expect(angular).not.toBe(undefined);
    });
    it('has angularmocks available too', function() {
      expect(angularmocks).not.toBe(undefined);
    });
  });
});
