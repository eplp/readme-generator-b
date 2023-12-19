const licenseType = async (licenseKeysList, githubApi) => {
   const license = licenseKeysList.filter((element) => element.name == answers.licenseType)[0];
   const licenseDescription = (await (await fetch(githubApi.licensesURL + '/' + license.key, githubApi.headers)).json()).description;
   return { license, licenseDescription };
};
