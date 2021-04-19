
function renderLicenseBadge(license) {
  switch (license) {
    case (license = "MIT"):
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case (license = "GNU General Public License v3.0"):
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case (license = "Apache License 2.0"):
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case (license = "ISC Lisence"):
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  console.log(license);
  switch (license) {
    case ("MIT"):
      return "[https://www.mit.edu/~amini/LICENSE.md](https://www.mit.edu/~amini/LICENSE.md)";
    case ("GNU General Public License v3.0"):
      return "[https://www.gnu.org/licenses/gpl-3.0.txt](https://www.gnu.org/licenses/gpl-3.0.txt)";
    case ("Apache License 2.0"):
      return "[https://www.apache.org/licenses/LICENSE-2.0.txt](https://www.apache.org/licenses/LICENSE-2.0.txt)";
    case ("ISC Lisence"):
      return "[https://www.apache.org/licenses/LICENSE-2.0.txt](https://www.apache.org/licenses/LICENSE-2.0.txt)";
    default:
      return "No license is provided for this project";
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  const topLanguage = `![https://img.shields.io/github/languages/top/${data.userName}/${data.repoName}?style=flat-square](https://img.shields.io/github/languages/top/${data.userName}/${data.repoName}?style=flat-square)`
  const openIssues = `![https://img.shields.io/bitbucket/issues/${data.userName}/${data.repoName}?style=flat-square](https://img.shields.io/bitbucket/issues/${data.userName}/${data.repoName}?style=flat-square)`
  
  return `
  # ${data.title}

  ## Description 

  ${data.description}

  here is a link to my project.
  
  * [link](${data.link})

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [features](#features)
  * [tests](#tests)
  * [contributing](#contributing)
  * [questions](#questions)
  

  ## Installation

  ${data.installation}


  ## Usage

  ${data.usage}

  ![screenshot](/assets/images/${data.screenshot})


  ## Credits

  ${data.credits}


  ## License

  * ${renderLicenseLink(data.license[0])}
  * ${renderLicenseBadge(data.license[0])}

  ## Badges
  
  ${topLanguage} 
  ${openIssues} 

  ## Features

  ${data.features}


  ## Tests

  ${data.tests}


  ## Contributing

  ${data.contributing}


  ## Questions

  If you have any questions about the app, 
  please feel free to contact me via email, 
  or checkout my Github account for more 
  great projects! 

  * [Email](mailto:${data.email})
  * [Github](https://github.com/${data.userName})




`;
}

module.exports = generateMarkdown;