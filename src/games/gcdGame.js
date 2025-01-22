import { getGcd, getRandomNumber } from '../utils.js';

const gsdGame = {
  rules: 'Find the greatest common divisor of given numbers.',
  getQuestion() {
    const a = getRandomNumber(100);
    const b = getRandomNumber(100);
    const question = `${a} ${b}`;
    const correctAnswer = getGcd(a, b).toString();

    return [question, correctAnswer];
  },
};

export default gsdGame;
