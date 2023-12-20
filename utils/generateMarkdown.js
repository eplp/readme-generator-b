import { license } from './license.js';

export const generateMarkdown = async (answers, licenseKeysList, githubApi) => {
   //
   const { appLicense, licenseDescription } = await license(answers.licenseType, licenseKeysList, githubApi);

   return `## ${answers.projectTitle}   ${`![](assets/images/badge.svg)`}
### Description
${answers.description}
${
   answers.confirmTOC
      ? `### Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#how-to-contribute)
- [Tests](#tests)
- [License information](#license)
- [Questions](#questions)
${answers.confirmUofU ? `- [U of U - Bootcamp](#u-of-u---bootcamp)` : ``}`
      : ``
}
### Installation  
${answers.installation}
### Usage
${answers.usage}
![README.md Generator](assets/images/readme-generator.jpg)
### How to contribute
${answers.contribute}
### Tests
${answers.tests}
### License
This work is distributed under the license type: ${appLicense[0].key + ' / ' + answers.licenseType}. ${licenseDescription}
### Questions
If you have any questions, visit my GitHub profile page: [github.com/${answers.userName}](github.com/${answers.userName}) or contact me at: [${answers.email}](mailto:${answers.email}).
${
   answers.confirmUofU
      ? `### U of U - Bootcamp
- GitHub repo link: ${answers.repo}
- Deployment/video link: ${answers.deployment}`
      : ``
}
`;
};
