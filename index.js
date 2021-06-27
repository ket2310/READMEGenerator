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
      message: 'What is the title of your README file?',
      name: 'projectTitle',
  },
  
  {
      type: 'editor',
      message: 'What was your motivation?',
      name: 'motive',
  }, 
  {
      type: 'editor',
      message: 'What problem does it solve?',
      name: 'problemSolved',
  },
  {
      type: 'editor',
      message: 'What did you learn?',
      name: 'lessons',
  },
  {
      type: 'editor',
      message: 'What are the steps required to install your project?',
      name: 'installation',
  },
  {
      type: 'editor',
      message: 'Provide instructions and examples for use.  Include screenshots as needed.',
      name: 'usages',
  },
  {
      type: 'input',
      message: 'List the names of all those who participated in this project.',
      name: 'credits',
  },
  {
      type: 'input',
      message: 'Licenses:',
      name: 'license',
  },
  {
      type: 'input',
      message: 'Github username.',
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
  writeToFile('./output/README.md', generateMarkdown(answers));
});
};

// Function call to initialize app
init();