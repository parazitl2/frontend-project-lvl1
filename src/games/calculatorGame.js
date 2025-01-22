import { getRandomNumber } from '../utils.js';

const operations = [
  ['+', (a, b) => a + b],
  ['-', (a, b) => a - b],
  ['*', (a, b) => a * b],
];

const calculatorGame = {
  rules: 'What is the result of the expression?',
  getQuestion() {
    const a = getRandomNumber(100);
    const b = getRandomNumber(100);
    const [sign, operation] = operations[getRandomNumber(2)];
    const correctAnswer = operation(a, b).toString();
    const question = `${a} ${sign} ${b}`;

    return [question, correctAnswer];
  },
};

export default calculatorGame;
