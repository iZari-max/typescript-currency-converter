import inquirer from "inquirer";
import chalk from 'chalk';
async function pkrConvert() {
    const answer = await inquirer
        .prompt([{
            type: "list",
            name: "pkrTo",
            message: chalk.redBright(`Chose currency to convert into`),
            choices: ["Dollar($)", "Euro(EUR)", "Pound(GBP)"]
        },
        {
            type: "number",
            name: "amount",
            message: chalk.redBright(`How much do you want to convert`)
        }]);
    switch (answer.pkrTo) {
        case "Dollar($)":
            console.log(chalk.blueBright(`\n${answer.amount}pkr into ${answer.pkrTo} = ${answer.amount * 245}\n`));
            break;
        case "Euro(EUR)":
            console.log(chalk.blueBright(`\n${answer.amount}pkr into ${answer.pkrTo} = ${answer.amount * 241}\n`));
            break;
        case "Pound(GBP)":
            console.log(chalk.blueBright(`\n${answer.amount}pkr into ${answer.pkrTo} = ${answer.amount * 273}\n`));
            break;
        default:
            break;
    }
}
export default pkrConvert;
