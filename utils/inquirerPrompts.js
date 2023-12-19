// import fetch from 'node-fetch';
import inquirer from 'inquirer';

export const inquirerPrompts = async (githubApi) => {
   let licenseKeysList = [];
   let licenseList = [];
   const licenseData = await (await fetch(githubApi.licensesURL, githubApi.headers)).json();

   licenseData.forEach((license) => {
      licenseKeysList.push({
         key: license.key,
         name: license.name,
      });
      licenseList.push(license.name);
   });

   const appIntro = `
---------------------------------------------
   Welcome to the README.md file generator
---------------------------------------------

Instructions:

1. Understand what each prompt is asking you.
2. Some prompts - Installation, Usage, Contributors, and Testing - will open your system default editor.
   
   a. Inside your editor you can add paragraphs, links, etc.
   b. Just follow standard markdown syntax (you can visit https://www.markdownguide.org/basic-syntax/) for lists, bullets, bold, italic, links, etc.
   c. If you need to add a header, start at the #### level.
   d. When you finish, save the default file and close your editor.
   e. IF you are creating a UofU Bootcamp readme.md file for submition, accept the last prompt.

Your answer will be then automatically received by the application.

Enjoy it!

Press the 'Enter' key to start......
`;
   const questions = [
      {
         type: 'confirm',
         name: 'appIntro',
         message: appIntro,
         default: 'true',
      },
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
         type: 'confirm',
         name: 'confirmTOC',
         message: "Do you want a 'Table Of Contents' section?",
      },
      {
         type: 'editor',
         name: 'installation',
         message: 'Enter detailed installation instructions:',
      },
      {
         type: 'editor',
         name: 'usage',
         message: 'Enter detailed usage information:',
      },
      {
         type: 'editor',
         name: 'contribute',
         message: 'Enter project contribution instruction:',
      },
      {
         type: 'editor',
         name: 'tests',
         message: 'Enter detailed instructions about how to test the project:',
      },
      {
         type: 'rawlist',
         name: 'licenseType',
         message: 'Select your project license type:',
         choices: licenseList,
         pageSize: 15,
      },
      {
         type: 'input',
         name: 'userName',
         message: 'Enter your GitHub user name:',
      },
      {
         type: 'input',
         name: 'email',
         message: 'Enter your email address:',
      },
      {
         type: 'confirm',
         name: 'confirmSubmit',
         message: "Do you want a section titled 'UofU Bootcamp'?",
      },
      {
         type: 'input',
         name: 'repo',
         message: 'Enter your repo URL:',
         when: (answers) => answers.confirmSubmit,
      },
      {
         type: 'editor',
         name: 'deployment',
         message: 'Enter your deployment/video URL:',
         when: (answers) => answers.confirmSubmit,
      },
   ];

   const answers = await inquirer.prompt(questions);

   return { answers, licenseKeysList };
};
