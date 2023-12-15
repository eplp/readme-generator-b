//* Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import fetch from 'node-fetch';

// TODO: Create an array of questions for user input

//* get list of licenses
let licenseObjectList = [];
let licenseList = [];
const rawData = await fetch('https://api.github.com/licenses', {
   headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
   },
});
const licenseData = await rawData.json();
licenseData.forEach((license) => {
   licenseObjectList.push({
      key: license.key,
      name: license.name,
   });
   licenseList.push(license.name);
});

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
   {
      type: 'rawlist',
      name: 'licenseType',
      message: 'Select your project license type:',
      choices: licenseList,
   },
];

const answers = await inquirer.prompt(questions);

const license = licenseObjectList.filter(
   (element) => element.name == answers.licenseType
);
const rawDescription = await fetch('https://api.github.com/licenses/' + license[0].key, {
   headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
   },
});
const licenseDescription = (await rawDescription.json()).description

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
## License
- ${answers.licenseType}
- ${licenseDescription}
`;
fs.writeFile('./README.md', fileData, (err) => {
   if (err) {
      console.log('err:', err);
   } else {
      console.log('Created file');
   }
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
