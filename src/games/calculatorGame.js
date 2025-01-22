import { getRandomNumber } from '../utils.js';

const MAX_NUMBERS_VALUE = 100;

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const calculatorGame = {
  rules: 'What is the result of the expression?',
  getQuestion() {
    const a = getRandomNumber(MAX_NUMBERS_VALUE);
    const b = getRandomNumber(MAX_NUMBERS_VALUE);
    const [sign, operation] = operations[getRandomNumber(2)];
    const correctAnswer = operation(a, b).toString();
    const question = `${a} ${sign} ${b}`;

    return [question, correctAnswer];
  },
};

export default calculatorGame;
