import gameEngine from "../index.js";
import getRandomNum from "../getRandomNum.js";

const gameRules = "What number is missing in the progression?";

const runProgGame = () => gameEngine(gameRules, generateData);

export default runProgGame;
