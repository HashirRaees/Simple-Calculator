#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"
console.log(chalk.bold.greenBright("\n\tWELCOME\n\t"),chalk.italic.yellowBright("\n Simple Calculator By Hashir Raees \n"))

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication","division"],
  },
])

//conditional statement
if (answer.operator === "addition"){
    console.log(answer.firstnumber + answer.secondnumber)
}
else if (answer.operator === "subtraction"){
    console.log(answer.firstnumber - answer.secondnumber)
}
else if (answer.operator === "multiplication"){
    console.log(answer.firstnumber * answer.secondnumber)
}
else if (answer.operator === "division"){
    console.log(answer.firstnumber / answer.secondnumber)
}
else {
    console.log("please select a valid operator")
}