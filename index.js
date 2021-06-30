// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [
  {

    type: 'input',
    message: 'What is the title of your project?',
    name: 'projectTitle',
  },

  {
    type: 'editor',
    message: 'What does this application do?',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Provide instructions and examples for use.  Include screenshots as needed.',
    name: 'usages',
  },
  {
    type: 'editor',
    message: 'List the ways in which someone may contribute to this project.',
    name: 'contributing',
  },
  {
    type: 'list',
    message: 'License:',
    name: 'license',
    choices: ['MIT', 'GNU', 'Apache', ''],
  },
  {
    type: 'input',
    message: 'Please enter the URL to your github account.',
    name: 'ghUsername',
  },
  {
    type: 'input',
    message: 'Email address',
    name: 'email',
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

  //writeFileAsync('./output/README.md', generateREADME(answers));
  writeFileAsync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    //console.log(JSON.stringify(answers, null, "  "));
    writeToFile('./README.md', generateMarkdown(answers));
  });
};

// Function call to initialize app
init();