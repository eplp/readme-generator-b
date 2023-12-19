import { makeBadge, ValidationError } from 'badge-maker';

export const createBadge = (licenseKey) => {
   const format = {
      label: 'license',
      message: licenseKey.toUpperCase(),
      labelColor: 'blue',
      color: 'brightgreen',
      style: 'plastic', //*  'plastic', 'flat', 'flat-square', 'for-the-badge' or 'social'
   };
   return makeBadge(format);
};
