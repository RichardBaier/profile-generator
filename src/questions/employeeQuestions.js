const employeeQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the name of this employee?',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an employee name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'What is the employee ID number?',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Please enter an employee ID number!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'What is the employee email address?',
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a valid email address for the employee!');
                return false;
            }
        }
    },
]

module.exports = employeeQuestions;