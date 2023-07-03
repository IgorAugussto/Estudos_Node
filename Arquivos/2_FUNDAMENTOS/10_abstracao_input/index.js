const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1',
        messgae: 'Qual a primeira nota?'
    },
    {
        name: 'p2',
        messgae: 'Qual a segunda nota?'
    },
]).then(answers)