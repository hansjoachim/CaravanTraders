define(['angularmocks', 'app'], function (mock, app) {
  "use strict";
  describe('app', function () {
    beforeEach(mock.module('app'));

    var scope;
    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      $controller('CityController', {$scope:scope});
    }));

    it('creates two cities by default', function () {
      expect(scope.cities.length).toBe(2);
    });
    it('creates a player by default', function () {
      expect(scope.player.gold).toBe(10);
      expect(scope.player.wares.length).toBe(0);
    });
    it('allows a player to travel to another place', function () {
      var starting_place = scope.player.location;
      scope.travelTo(scope.cities[1]);
      expect(scope.player.location).not.toBe(starting_place);
    });
    it('allows a player to buy an item', function() {
      //TODO: somewhat assumes that player is currently in citites[0]
      var ware = scope.cities[0].wares[0];
      var ware_name = ware.name;
      var initial_amount = ware.amount;
      scope.purchase(ware_name);
      expect(scope.player.wares.length).toBe(1);
      expect(scope.cities[0].wares[0].amount).toBe(initial_amount - 1);
      expect(scope.player.wares[0].name).toBe(ware_name);
      expect(scope.player.wares[0].amount).toBe(1);
    });
    it('allows a player to sell an item', function() {
       //TODO: somewhat assumes that player is currently in citites[0]
      var ware = scope.cities[0].wares[0];
      var ware_name = ware.name;
      var initial_amount = ware.amount;
      scope.player.wares = [{name: ware_name, amount: 2}];
      scope.sell(ware_name);
      expect(scope.player.wares[0].amount).toBe(1);
      expect(scope.cities[0].wares[0].amount).toBe(initial_amount + 1);
    });
    //TODO: verify non-existing items cannot be sold
    //TODO: can I buy all wares in a city?
  });
});
