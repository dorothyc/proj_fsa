const assert = require('assert');
const { expect } = require('chai');
const tests = require('../BPI.assignment');


describe('module:model/BPI', function (){
    describe('#findState', function (){
      it('should return 0 with input 110', function (){
        expect(tests.findState('110')).to.equal('0');
      });
      it('should return 1 with input 1010', function (){
        expect(tests.findState('1010')).to.equal('1');
      });
      it('should return 2 with input 1000', function (){
        expect(tests.findState('1000')).to.equal('2');
      });
      it('should return 0 with empty string', function (){
        expect(tests.findState('')).to.equal('0');
      });
      it('should return an error message and 0 with string other than 0 or 1', function (){
        expect(tests.findState('2134')).to.equal('0');
      });
    });
});
  
  