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
   {
      type: 'input',
      name: 'description',
      message: 'Enter the project description:',
   },
   {
      type: 'input',
      name: 'installation',
      message: 'Enter detailed installation instructions:',
   },
   {
      type: 'input',
      name: 'usage',
      message: 'Enter detailed usage information:',
   },
   {
      type: 'input',
      name: 'contribution',
      message: 'Enter project contribution instruction:',
   },
   {
      type: 'input',
      name: 'tests',
      message: 'Enter detailed instructions about how to test the project:',
   },
];

// prettier-ignore
inquirer
   .prompt(questions)
   .then((answers) => {
      console.log('answers:', answers);
      const fileData = `# ${answers.projectTitle}
## Description
- ${answers.description}
## Installation
- ${answers.installation}
## Usage
- ${answers.usage}
## How to contribute
- ${answers.contribution}
## Tests
- ${answers.tests}
`;
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