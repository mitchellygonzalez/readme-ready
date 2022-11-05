// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license == "BSD 3-Clause License" ) {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }
  else if(license == "Apache 2.0 License" ) {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
  else if(license == "Boost Software License 1.0") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
}

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
  * [Contributing] (#contributing)
  * [Tests] (#tests)
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

  ## Contributing
  How can others contribute to this project?
  ${data.contributing}

  ## Tests
  Provide test instructions for your application:
  ${data.tests}

  ## Questions
  If you have any questions, you may open an issue at:
  ${data.githubUser}
  
  Or Contact via email at:
  ${data.email}
`;
}


module.exports = generateMarkdown;
