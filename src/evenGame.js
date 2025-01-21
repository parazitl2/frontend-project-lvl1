import readlineSync from 'readline-sync';
import welcomeUserAndGetName from './cli.js';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const checkIsEven = (number) => number % 2 === 0;

const answersMap = {
  yes: true,
  no: false,
};

const playEvenGame = () => {
  const userName = welcomeUserAndGetName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber();
    const isEven = checkIsEven(number);
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    if (answersMap[answer] === undefined || answersMap[answer] !== isEven) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;
