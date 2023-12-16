//* Include packages needed for this application

import { generateMarkdown } from './utils/generateMarkdown.js';
import { writeToFile } from './utils/writeToFile.js';
import { inquirerPrompts } from './utils/inquirerPrompts.js';

const fileName = './README.md';
const githubApi = {
   licensesURL: 'https://api.github.com/licenses',
   headers: {
      headers: {
         Accept: 'application/vnd.github+json',
         'X-GitHub-Api-Version': '2022-11-28',
      },
   },
};

const init = async () => {
   const { answers, licenseKeysList } = await inquirerPrompts(githubApi);
   const fileData = await generateMarkdown(answers, licenseKeysList, githubApi);
   writeToFile(fileName, fileData);
};

init();
