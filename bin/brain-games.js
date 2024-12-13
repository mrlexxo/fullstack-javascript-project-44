#!/usr/bin/env node

import greetUser from "../src/cli.js";
import runEvenGame from "../src/games/brain-even.js";

console.log("Welcome to Brain Games!");
greetUser();
runEvenGame();
