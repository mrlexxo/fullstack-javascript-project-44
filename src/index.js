import readlineSync from "readline-sync";

const rounds = 3;

const gameEngine = (gameRules, generateData) => {
  console.log("Welcome to the Brain Games!");
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);

  for (let i = 0; i < rounds; i += 1) {
    const [questionEntry, correctAnswer] = generateData();
    console.log(`Question: ${questionEntry}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (correctAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`
      );
      return console.log(`Let's try again, ${userName}!`);
    }
    console.log("Correct answer!");
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default gameEngine;
