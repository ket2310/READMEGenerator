// TODO: Create an array of questions for user input
//   title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        /*  WHEN I enter my project title
            THEN this is displayed as the title of the README */
        type: 'input',
        message: 'What is the title of your README file?',
        name: 'projectTitle',
    },
    /* WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
 */
    {
        type: 'editor',
        message: 'What was your motivation?',
        name: 'motive',
    }, 
    {
        type: 'editor',
        message: 'Why did you build this project?',
        name: 'reasonForProject',
    },
    {
        type: 'editor',
        message: 'What problem does it solve?'        ,
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

module.exports = {
    questions
};