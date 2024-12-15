import gameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const generateData = () => {
  const num1 = getRandomNum(1, 99);
  const num2 = getRandomNum(1, 99);

  const questionEntry = `${num1} ${num2}`;
  const correctAnswer = `${getGCD(num1, num2)}`;
  return [questionEntry, correctAnswer];
};

const runGCDGame = () => gameEngine(gameRules, generateData);

export default runGCDGame;
