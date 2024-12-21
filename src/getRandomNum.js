const getRandomNum = (minNum = 0, maxNum = 100) => Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

export default getRandomNum;
