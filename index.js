const inquirer = require('inquirer');
const managerQuestions = require('./src/questions/managerQuestions');

const teamArray = [];

// initializes the app
async function initApp() {
    console.log("Welcome to the Team Profile Generator!");

    const manager = await inquirer.prompt(managerQuestions)
    .then((answers) => createManager(answers));

    teamArray.push(manager);
}