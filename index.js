#!/usr/bin/env node
import inquirer from "inquirer";
// computer will generate number
//user put for gussing number
//compare user input with computer number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGusseNumber",
        type: "number",
        message: "Please guess a number between 1- 10:",
    },
]);
if (answers.userGusseNumber === randomNumber) {
    console.log("Congrulation! You gussed right number.");
}
else {
    console.log("Try again ! You gussed wrong number");
}
// random method (betwwen 0,1 values generate krta hy), 0.4/0.8/0.9
// floor method (dusra nokar hy random k kam ko sequence my krdy ga not in decimal 
// random na 0 .4 dia tu floor down krdy ga like 0 dy gaa ), max 0 -9
