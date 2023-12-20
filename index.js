//* Include packages needed for this application
import { inquirerPrompts } from './utils/inquirerPrompts.js';
import { generateMarkdown } from './utils/generateMarkdown.js';
import { writeToFile } from './utils/writeToFile.js';

//* program constants
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
   //
   const { answers, licenseKeysList } = await inquirerPrompts(githubApi);  //* present prompts to user
   const fileData = await generateMarkdown(answers, licenseKeysList, githubApi); //* create markdown file
   writeToFile(fileName, fileData); //* write file to disk
};

init();  //* runs program


