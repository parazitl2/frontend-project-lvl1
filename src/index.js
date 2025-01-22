import readlineSync from 'readline-sync';
import welcomeUserAndGetName from './cli.js';

const playGame = (game) => {
  const userName = welcomeUserAndGetName();

  // print game rules
  console.log(game.rules);

  for (let i = 0; i < 3; i += 1) {
    // get and print the question
    const [question, correctAnswer] = game.getQuestion();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
