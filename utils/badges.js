import { makeBadge, ValidationError } from 'badge-maker';
import { writeToFile } from './writeToFile.js';

export const createBadge = (licenseKey) => {
   const format = {
      label: 'license',
      message: licenseKey.toUpperCase(),
      labelColor: 'black',
      color: '#ce090a',
      style: 'plastic', //*  'plastic', 'flat', 'flat-square', 'for-the-badge' or 'social'
   };
   const fileName = './assets/images/badge.svg';
   const fileData = makeBadge(format);
   writeToFile(fileName, fileData);
   return;
};
