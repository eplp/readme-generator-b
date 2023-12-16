// import fetch from 'node-fetch';
import inquirer from 'inquirer';

export const inquirerPrompts =  async (githubApi) => {
   
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

   return { answers, licenseKeysList };
};
