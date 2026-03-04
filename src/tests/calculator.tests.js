const { expect } = require('chai');
const { calculate } = require('../calculator');

describe('Calculator', () => {
  describe('Addition', () => {
    it('should add two numbers', () => {
      expect(calculate(2, '+', 3)).to.equal(5);
      expect(calculate(0, '+', 0)).to.equal(0);
      expect(calculate(-1, '+', 1)).to.equal(0);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two numbers', () => {
      expect(calculate(10, '-', 4)).to.equal(6);
      expect(calculate(0, '-', 0)).to.equal(0);
      expect(calculate(-1, '-', 1)).to.equal(-2);
    });
  });

  describe('Multiplication', () => {
    it('should multiply two numbers', () => {
      expect(calculate(45, '*', 2)).to.equal(90);
      expect(calculate(0, '*', 5)).to.equal(0);
      expect(calculate(-2, '*', 3)).to.equal(-6);
    });
  });

  describe('Division', () => {
    it('should divide two numbers', () => {
      expect(calculate(20, '/', 5)).to.equal(4);
      expect(calculate(0, '/', 5)).to.equal(0);
      expect(calculate(-6, '/', 3)).to.equal(-2);
    });
    it('should return null for division by zero', () => {
      expect(calculate(5, '/', 0)).to.equal(null);
    });
  });

  describe('Unsupported operations', () => {
    it('should return null for unsupported operations', () => {
      expect(calculate(2, '^', 3)).to.equal(null);
    });
  });
});
