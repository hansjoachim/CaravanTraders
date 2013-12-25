define(['ware'], function (ware) {
  'use strict';
  describe('a ware', function () {
    it('has a name', function () {
      var banana = ware.create('banana');
      expect(banana.name).toBe('banana');
    });
    it('has default amount of 1', function () {
      var orange = ware.create('orange');
      expect(orange.amount).toBe(1);
    });
    it('can have a set amount', function () {
      var apple = ware.create('apple', 3);
      expect(apple.name).toBe('apple');
      expect(apple.amount).toBe(3);
    });
    it('has a default cost of 0', function() {
      var pear = ware.create('pear');
      expect(pear.cost).toBe(0);
    });
    it('can have a set cost', function() {
      var coconut = ware.create('coconut', 1, 10);
      expect(coconut.cost).toBe(10);
    });
  });
});
