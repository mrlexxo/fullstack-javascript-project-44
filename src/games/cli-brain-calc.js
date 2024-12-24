import gameEngine from "../index.js";
import getRandomNum from "../getRandomNum.js";

const operandArray = ["+", "-", "*"];
const gameRules = "What is the result of the expression?";

const expression = (num1, operand, num2) => {
  switch (operand) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    default:
      throw new Error(`Invalid operator - ${operand}`);
  }
};

const generateData = () => {
  const num1 = getRandomNum(1, 99);
  const num2 = getRandomNum(1, 99);

  const operandRandomized =
    operandArray[getRandomNum(0, operandArray.length - 1)];
  const questionEntry = `${num1} ${operandRandomized} ${num2}`;
  const correctAnswer = `${expression(num1, operandRandomized, num2)}`;

  return [questionEntry, correctAnswer];
};

const runCalcGame = () => gameEngine(gameRules, generateData);

export default runCalcGame;
