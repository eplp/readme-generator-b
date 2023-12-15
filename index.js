//* Include packages needed for this application
import inquirer from 'inquirer';
import fetch from 'node-fetch';
import { makeBadge, ValidationError } from 'badge-maker';
import fs from 'fs';

// TODO: Create an array of questions for user input

//* get list of licenses
let licenseObjectList = [];
let licenseList = [];
const licensesURL = 'https://api.github.com/licenses';
const headers = {
   headers: {
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
   },
};

const licenseData = await (await fetch(licensesURL, headers)).json();
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

const licenseKey = licenseObjectList.filter((element) => element.name == answers.licenseType)[0].key;
const licenseDescription = (await (await fetch(licensesURL + licenseKey, headers)).json()).description;

//* license badge
const format = {
   label: 'license',
   message: licenseKey.toUpperCase(),
   labelColor: 'gray',
   color: 'red',
   style: 'flat'
};
const svg = makeBadge(format);

//* create README.md file content
const fileData = `# ${answers.projectTitle} ${svg}
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
