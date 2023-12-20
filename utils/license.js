import { createBadge } from './badges.js';

export const license = async (licenseType, licenseKeysList, githubApi) => {
   //
   const appLicense = licenseKeysList.filter((element) => element.name == licenseType);
   createBadge(appLicense[0].key);
   
   const licenseDescription = (await (await fetch(githubApi.licensesURL + '/' + appLicense[0].key, githubApi.headers)).json()).description;
   
   return { appLicense, licenseDescription };
};
