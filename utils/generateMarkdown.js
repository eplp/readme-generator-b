import { createBadge } from './badges.js';
import { license } from './license.js';

export const generateMarkdown = async (answers, licenseKeysList, githubApi) => {
   const { appLicense, licenseDescription } = await license(answers.licenseType, licenseKeysList, githubApi);
   console.log("file: generateMarkdown.js:6   appLicense, licenseDescription :", appLicense, licenseDescription )
   return `## ${answers.projectTitle}   ${createBadge(appLicense[0].key)}
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
- This work is distributed under this license type: ${appLicense[0].key + ' - ' + answers.licenseType}
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
