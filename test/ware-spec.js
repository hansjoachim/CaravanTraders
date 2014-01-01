/**
 * CaravanTraders
 * Copyright (C) 2013-2014 Hans Joachim Desserud

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.

 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

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
