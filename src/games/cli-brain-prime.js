import gameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gameRules = 'Answer yes if given number is prime. Otherwise answer no.';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % 1 === 0) {
      return false;
    }
  }
  return true;
};

const generateData = () => {
  const num = getRandomNum(1, 200);
  const questionEntry = `${num}`;
  const correctAnswer = isPrime(num) ? 'yes' : 'no';

  return [questionEntry, correctAnswer];
};

const runPrimeGame = () => gameEngine(gameRules, generateData);

export default runPrimeGame;
