#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);


const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1 - 6"
    }
]);

if(answers.userGuessedNumber === randomNumber)
{console.log("Congratulations! You guessed a right number")}
else{console.log("You guessed wrong number")};





