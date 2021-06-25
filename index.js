// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const rdme = require('./questionsForReadme.js')
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to write README file
const promptUser = () => {
    inquirer.prompt(rdme.questions).then((answers) => {
      console.log(JSON.stringify(answers, null, "  "));
    
    });
  };

const generateREADME = (answers) =>
`# ${answers.projectTitle}`
;
// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
