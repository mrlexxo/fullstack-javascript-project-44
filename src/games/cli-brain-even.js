import gameEngine from '../index.js'
import getRandomNum from "../getRandomNum.js";

const isEven = (num) => num % 2 === 0;
const gameRules = "Answer yes if the number is even, otherwise answer no.";

const generateData = () => {
  const num = getRandomNum();
  const questionNum = `${num}`;
  const correctAnswer = isEven(num) ? "yes" : "no";
  return [questionNum, correctAnswer];
};

const runEvenGame = () => gameEngine(gameRules, generateData);

export default runEvenGame;