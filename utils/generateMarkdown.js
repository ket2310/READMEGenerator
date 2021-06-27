// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return  `# ${data.projectTitle} \n\n` + 
  `## MOTIVATION \n\t * ${data.motive} \n\n` +
  `## PROBLEM SOLVED \n\t * ${data.problemSolved}\n\n` +
  `## LESSONS LEARNE  \n\t * ${data.lessons} \n\n` +
  `## HOW TO INSTALL \n\t * ${data.installation} \n\n` +
  `## USAGES \n\t * ${data.usages} \n\n` +
  `## CREDITS \n\t *  ${data.credits} \n\n` +
  `## LICENCES \n\t * ${data.license} \n\n` +
  `## GITHUB USERNAME \n\t * ${data.ghUsername} \n\n` +
  `## EMAIL \n\t * ${data.email} \n\n`
}

module.exports = generateMarkdown;
