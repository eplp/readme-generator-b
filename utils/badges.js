import { makeBadge, ValidationError } from 'badge-maker';

const licenseBadge = (licenseKey) => {
   const format = {
      label: 'license',
      message: licenseKey.toUpperCase(),
      labelColor: 'gray',
      color: 'brightgreen',
      style: 'flat',
   };
   return makeBadge(format);
};
export { licenseBadge };
