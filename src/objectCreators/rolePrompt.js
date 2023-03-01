const inquirer = require('inquirer');

async function rolePrompt() {
    const { role } = await inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose a new role for the Employee',
            choices: [{ name: 'Intern', value: 0}, { name: 'Engineer', value: 1}]
        },
    ])

    return role;
}

module.exports = rolePrompt;