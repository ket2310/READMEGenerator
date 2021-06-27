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
  `## DESCRIPTION: \n\t * ${data.description} \n\n` +
  `## HOW TO INSTALL: \n\t * ${data.installation} \n\n` +
  `## USAGES: \n\t * ${data.usages} \n\n` +
  `## CONTRIBUTING: \n\t *  ${data.contributing} \n\n` +
  `## LICENCES: \n\t * ${data.license} \n\n` +
  `## QUESTIONS: \n\t * See github.com/${data.ghUsername} or email me at ${data.email} \n\n`
}

module.exports = generateMarkdown;
