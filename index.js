const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
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
            'Apache',
            'Academic',
            'GNU',
            'Mozilla',
            'Open',
            'ISC',
            'Boost',
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
    {
        type: 'input',
        message: 'Please enter your Github username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Please enter your email',
        name: 'email',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Your file has been saved!")
  );
};

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>
    writeToFile("./readme/README.md", generateMarkdown(answers))
    );
}

// function call to initialize program
init();
