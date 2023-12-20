import fs from 'fs';

export const writeToFile = (fileName, fileData) => {
   fs.writeFile(fileName, fileData, (err) => {
      if (err) {
         console.log('***=> file: writeToFile.js:8 err:', err);
      } else {
         console.log("***=>   file: writeToFile.js:10   Created fileName:", fileName)
      }
   });
};
