import { licenseBadge } from './badges.js';
// import fetch from 'node-fetch';

export const generateMarkdown = async (answers, licenseKeysList, githubApi) => {
   //*
   const licenseKey = licenseKeysList.filter((element) => element.name == answers.licenseType)[0].key;
   const licenseDescription = (await (await fetch(githubApi.licensesURL + '/' + licenseKey, githubApi.headers)).json()).description;
   let toc = answers.confirmTOC ? `## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)}
- [Tests](#tests)
- [License information](#license)
- [Questions](#questions)`: '';

   return `# ${answers.projectTitle} ${licenseBadge(licenseKey)}
## Description
- ${answers.description}
${answers.confirmTOC ? `## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License information](#license)
- [Questions](#questions)`:``}
## Installation  
- ${answers.installation}
## Usage



- ${answers.usage}
## How to contribute




- ${answers.contribute}
## Tests




- ${answers.tests}
## License









- ${answers.licenseType}
- ${licenseDescription}
## Questions




If you have any questions, visit my GitHub profile page: ${'github.com/' + answers.userName} or cantact me at: ${answers.email} 
`;
};
