// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const rdme = require('./questionsForReadme.js')

// TODO: Create a function to write README file
const promptUser = () => {
    inquirer.prompt(rdme.questions).then((answers) => {
        console.log(JSON.stringify(answers, null, '  '));
    });
}

const generateREADME = (answers) => {
    
}
// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('index.html', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
