import fs from 'fs';

export const writeToFile = (fileName, fileData) => {
   //
   fs.writeFile(fileName, fileData, (err) => {
      if (err) {
         console.log('***=> file: writeToFile.js:8 err:', err);
      } else {
         console.log('***=> Created fileName:', fileName);
      }
   });

   return;
};
