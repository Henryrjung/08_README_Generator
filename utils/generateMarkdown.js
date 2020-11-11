// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributions}

  ## Tests

  ${data.test}

  ## Questions

  ${data.questions}
`;
}

module.exports = generateMarkdown;
