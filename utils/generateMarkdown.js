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
  return `
  # ${data.title}
  https://github.com/${data.githubUser}/${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Questions](#questions)

  ## Installation
  To run the application, the following must be installed:
  ${data.installation}

  ## Usage
  In order to use this app,
  ${data.usage}
  

  ## License:
  This project is licensed under:
  ${data.license}

  ## Questions
  If you have any questions, you may open an issue at:
  ${data.githubUser}
  
  Or Contact via email at:
  ${data.email}
`;
}


module.exports = generateMarkdown;
