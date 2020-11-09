const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'What is the project description?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'please enter the table of contents:',
        name: 'tableOfContents',
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
        type: 'input',
        message: 'Please choose a license',
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
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
