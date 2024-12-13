import readlineSync from 'readline-sync';

const roundCount = 3;

const gameEngine = (gameRules, generateData) => {
    
    console.log("Welcome to Brain Games!");
    const playerName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${playerName}!`);
    console.log(gameRules);

    for (let i = 0; i < roundCount; i += 1) {
        const [questionNum, correctAnswer] = generateData();
        console.log(`Number: ${questionNum}`);
        const userAnswer = readlineSync.question("Your answer: ").toLowerCase();

        if (correctAnswer !== userAnswer) {
            console.log(`'${userAnswer}' is wrong answer. Correct answer was '${correctAnswer}'.`);
            return console.log(`Try again!`);
        }
    console.log('Correct answer!');
    }
    return console.log(`Well done, ${playerName}!`);
};

export default gameEngine;