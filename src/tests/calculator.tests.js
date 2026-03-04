const { expect } = require('chai');
const { calculate, modulo, power, squareRoot } = require('../calculator');

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

  describe('Modulo', () => {
    it('should return remainder of division', () => {
      expect(modulo(5, 2)).to.equal(1);
      expect(modulo(10, 3)).to.equal(1);
      expect(modulo(10, 0)).to.equal(null);
    });
  });

  describe('Exponentiation', () => {
    it('should return base raised to exponent', () => {
      expect(power(2, 3)).to.equal(8);
      expect(power(5, 0)).to.equal(1);
      expect(power(2, -2)).to.equal(0.25);
    });
    it('should return base raised to exponent using calculate', () => {
      expect(calculate(2, '^', 3)).to.equal(8);
    });
  });

  describe('Square Root', () => {
    it('should return square root of positive number', () => {
      expect(squareRoot(16)).to.equal(4);
      expect(squareRoot(0)).to.equal(0);
    });
    it('should return null for negative input', () => {
      expect(squareRoot(-9)).to.equal(null);
    });
  });

  describe('Unsupported operations', () => {
    it('should return null for unsupported operations', () => {
      expect(calculate(2, '@', 3)).to.equal(null);
    });
  });
});
