import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(
    'Type brain-help for a short manual on how this project operates.',
  );
};

export default greetUser;
