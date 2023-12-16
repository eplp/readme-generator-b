import fs from 'fs';

export function writeToFile(fileName, fileData) {
   fs.writeFile(fileName, fileData, (err) => {
      if (err) {
         console.log('err:', err);
      } else {
         console.log('Created file');
      }
   });
}
