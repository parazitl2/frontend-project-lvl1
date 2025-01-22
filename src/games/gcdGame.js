import { getGcd, getRandomNumber } from '../utils.js';

const MAX_NUMBERS_VALUES = 100;

const gsdGame = {
  rules: 'Find the greatest common divisor of given numbers.',
  getQuestion() {
    const a = getRandomNumber(MAX_NUMBERS_VALUES);
    const b = getRandomNumber(MAX_NUMBERS_VALUES);
    const question = `${a} ${b}`;
    const correctAnswer = getGcd(a, b).toString();

    return [question, correctAnswer];
  },
};

export default gsdGame;
