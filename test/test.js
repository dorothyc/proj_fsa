const assert = require('assert');
const { expect } = require('chai');
const tests = require('../BPI.assignment');

describe('Basic Mocha String Test', function () {
    it('should return number of charachters in a string', function () {
        assert.equal("Hello".length, 5);
    });
    it('should return first charachter of the string', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});

describe('module:model/BPI', () => {
    describe('#findState', function (){
      it('should return 0', function (){
        expect(tests.findState('110')).to.equal('0');
      });
    });
});
  
  