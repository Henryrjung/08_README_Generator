// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 

  ${data.description}

  ## Table of Contents
  * installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  
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
