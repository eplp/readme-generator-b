//* Include packages needed for this application
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [
   {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the project title:',
   },
];

inquirer.prompt(questions).then((answers) => {
   console.log('answers:', answers);
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
