//* Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [
   {
      type: 'input',
      name: 'projectTitle',
      message: 'Enter the project title:',
   },
];

// prettier-ignore
inquirer
   .prompt(questions)
   .then((answers) => {
      console.log('answers:', answers);
      const fileData = `# ${answers.projectTitle}`;
      fs.writeFile('./README.md', fileData, 'utf8', (err) => {
         if (err) {
            console.log('err:', err);
         } else {
            console.log('Created file');
         }
      });
   });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
