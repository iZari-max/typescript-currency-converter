#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import pkrConvert from "./pkr.js";

async function welcome() {
    console.log(chalk.greenBright(`\tCurrency Converter\t\n`))
    console.log(chalk.greenBright(`\t$\t245/-pkr\n`))
    console.log(chalk.greenBright(`\tEUR\t241/-pkr\n`))
    console.log(chalk.greenBright(`\tGBP\t273/-pkr\n`))
}
await welcome()
async function restart() {
    do{
        await pkrConvert()
        var answer = await inquirer
        .prompt([{
            type: "list",
            name: "re",
            message: chalk.redBright(`Do you want to convert more?`),
            choices: ["yes", 'no']
    }])
    }
    while(answer.re == "yes")
}
restart()