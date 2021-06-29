// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  '
    case "Apache":
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0) '
    case "GNU":
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    default:
      return ' '
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return '`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`'
    case "Apache":
      return '`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`'

    case "GNU":
      return '`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`'
    default:
      return ' '
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return '\n\n## MIT \n\n### The MIT License'
    case "Apache":
      return '\n\n## Apache \n\n### Apache 2.0 License'
    case "GNU":
      return '\n\n## GNU \n\n### GNU GPL v3'
   default:
      return ' '
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var lic = data.license;

  return `# ${data.projectTitle} \n\n` +
    `## DESCRIPTION: \n\t ${data.description} \n\n` +

    `## Table of Contents
- [Installation](#installation)
- [Usage](#usages)
- [Contribution](#contributing)
<<<<<<< HEAD
- [License](#license)
- [Contact Me](#contact-me) \n\n` +



    `## INSTALLATION: \n\t  ${data.installation} \n\n` +
    `## USAGES: \n ${data.usages} \n\n` +
    `## CONTRIBUTING: \n\t ${data.contributing} \n\n` +
    `## LICENSE: \n\t ${renderLicenseSection(lic)} \n` +
    `${renderLicenseBadge(lic)} \n` + `${renderLicenseLink(lic)} \n\n` +
    `## Contact Me: \n\t See ${data.ghUsername} or email me at ${data.email} \n\n`
=======
- [License](#licenses)
- [Contact Me](#ghUsername) \n\n` +


  `## HOW TO INSTALL: \n\t  ${data.installation} \n\n` +
  `## USAGES: \n ${data.usages} \n\n` +
  `## CONTRIBUTING: \n\t ${data.contributing} \n\n` +
  `## LICENCES: \n\t  ${data.licenses} \n\n` +
  `## QUESTIONS: \n\t See github.com/${data.ghUsername} or email me at ${data.email} \n\n`
>>>>>>> d103ea5fb70d030949e594c0cbeffb3291c5fa0f
}

module.exports = generateMarkdown;
