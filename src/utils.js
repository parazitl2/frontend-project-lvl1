/**
 * Checks whether the passed number is even
 * @param number {number}
 * @returns {boolean}
 */
export const checkIsEven = (number) => number % 2 === 0;

/**
 * Returns random number from 0 up to the passed maxValue (default is 100)
 * @param maxValue {number}
 * @returns {number}
 */
export const getRandomNumber = (maxValue = 100) => Math.round(Math.random() * maxValue);

/**
 * Euclidean algorithm implementation for obtaining of the  greatest common divisor (GCD)
 * @param firstNumber {number}
 * @param secondNumber {number}
 * @returns {number}
 */
export const getGcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};
