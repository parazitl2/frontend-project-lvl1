import { getRandomNumber, isPrime } from '../utils.js';

const MAX_NUMBER_VALUE = 100;

const primeGame = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestion() {
    const number = getRandomNumber(MAX_NUMBER_VALUE);
    const question = number.toString();
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    return [question, correctAnswer];
  },
};

export default primeGame;
