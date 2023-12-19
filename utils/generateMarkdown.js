import { createBadge } from './badges.js';
// import fetch from 'node-fetch';

export const generateMarkdown = async (answers, licenseKeysList, githubApi) => {
   //
   const { license, licenseDescription } = await licenseType(licenseKeysList, githubApi);
   
   return `## ${answers.projectTitle}   ${createBadge(license.key)}
### Description
- ${answers.description}
${
   answers.confirmTOC
      ? `### Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License information](#license)
- [Questions](#questions)
${answers.confirmSubmit ? `- [U of U - Bootcamp](#u-of-u---bootcamp)` : ``}`
      : ``
}
### Installation  
${answers.installation}
### Usage
${answers.usage}
### How to contribute
${answers.contribute}
### Tests
${answers.tests}
### License
- This work is distributed under the ${answers.license.key + ' - ' + answers.licenseType}
- ${licenseDescription}
### Questions
If you have any questions, visit my GitHub profile page: ${'github.com/' + answers.userName} or contact me at: ${answers.email}
${
   answers.confirmSubmit
      ? `- GitHub repo: [${answers.repo}](${answers.repo})
- Deployment link: ${answers.deployment}`
      : ``
}
`;
};
