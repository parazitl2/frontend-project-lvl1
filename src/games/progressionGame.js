import { getRandomNumber } from '../utils.js';

const PROGRESSION_LENGTH = 10;
const STARTING_NUMBER_MAX = 10;
const PROGRESSION_SUM_MAX = 10;

const progressionGame = {
  rules: 'What number is missing in the progression?',
  getQuestion() {
    const startingNumber = getRandomNumber(STARTING_NUMBER_MAX);
    const progressionSum = getRandomNumber(PROGRESSION_SUM_MAX);
    const missedNumberIndex = getRandomNumber(PROGRESSION_LENGTH - 1);
    const progressionArr = [];

    for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
      progressionArr.push(startingNumber + progressionSum * i);
    }

    const correctAnswer = progressionArr[missedNumberIndex].toString();
    progressionArr[missedNumberIndex] = '..';
    const question = progressionArr.join(' ');

    return [question, correctAnswer];
  },
};

export default progressionGame;
