const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter instructions to install the project:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'please enter instructions on how to use the project:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Please choose a license',
        choices: [
            'MIT',
            'Apache-2.0',
            'GPL-3.0',
            'BSD-2-Clause',
            'BSD-3-Clause',
            'BSD-4-Clause',
        ],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Please enter how users can contribute to this project:',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'Please enter how to test this project:',
        name: 'test',
    },
    {
        type: 'input',
        message: 'Please enter questions for this project:',
        name: 'questions',
    },
];

// function to write README file
function writeToFile(data) {
    fs.writeFile('./Output/readme.md',  data, (err) => {
        if (err) throw err;
        console.log('Your file has been saved')
    });
};

async function userInput() {
    let response = await inquirer.prompt(questions);
    if (response) {
        writeToFile(generate(response));
    }
}

// function to initialize program
function init() {
    userInput();
}

// function call to initialize program
init();
