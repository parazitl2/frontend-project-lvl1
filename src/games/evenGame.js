import { checkIsEven, getRandomNumber } from '../utils.js';

const evenGame = {
  rules: 'Answer "yes" if the number is even, otherwise answer "no".',
  getQuestion() {
    const number = getRandomNumber().toString();
    const isEven = checkIsEven(number);
    const correctAnswer = isEven ? 'yes' : 'no';

    return [number, correctAnswer];
  },
};

export default evenGame;
