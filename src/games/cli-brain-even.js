import readlineSync from "readline-sync";

const isEven = (num) => num % 2 === 0;

const runEvenGame = () => {
  const roundsCount = 3;

  console.log("Answer yes if the number is even, otherwise answer no.");
  for (let i = 0; i < roundsCount; i += 1) {
    const number = Math.floor(Math.random() * 100);
    console.log(`Number: ${number}`);
    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();

    const correctAnswer = isEven(number) ? "yes" : "no";

    if (correctAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Try again!`);
    }

    if (correctAnswer === userAnswer) {
      console.log("Correct!");
    }
  }
};

export default runEvenGame;
