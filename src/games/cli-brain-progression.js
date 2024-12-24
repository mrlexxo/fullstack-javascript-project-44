import gameEngine from '../index.js';
import getRandomNum from '../getRandomNum.js';

const gameRules = 'What number is missing in the progression?';

const createProgression = (firstItem, progStep, progLength) => {
  const progArray = [];

  for (let i = 1; i < progLength; i += 1) {
    const result = firstItem + progStep * i;
    progArray.push(result);
  }

  return progArray;
};

const generateData = () => {
  const firstItem = getRandomNum(1, 9);
  const progStep = getRandomNum(1, 9);
  const progLength = getRandomNum(6, 9);
  const progGenerated = createProgression(firstItem, progStep, progLength);
  const randomIndex = Math.floor(Math.random() * progGenerated.length);

  const correctAnswer = `${progGenerated[randomIndex]}`;
  progGenerated[randomIndex] = '..';
  const questionEntry = progGenerated.join(' ');
  return [questionEntry, correctAnswer];
};

const runProgGame = () => gameEngine(gameRules, generateData);

export default runProgGame;
