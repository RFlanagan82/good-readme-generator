// function to generate markdown for README
function generateMarkdown(data) {








    return `
    
    # Title
    ${data.Title}
  
    ## Table of Contents
    *[Description](#description)
    *[Installation requirements](#installation)
    *[Usage Information](#usage)
    *[Credits / Contributions](#contributors)
    *[Resources](#resources)
    *[Tests](#tests)
    *[License](#license)
    *[Questions](#questions)

    ## Description
    ${data.Description}

    ## Installation Requirements
    ${data.Installation}

    ## Usage Information
    ${data.Usage}

    ## Credits & Contributions
    ${data.Contributors}

    ## Resources
    ${data.Resources}

    ## Tests
    ${data.Tests}

    ## License
    ${data.License}

    ## Questions
    Contact:

    Github: [${data.userName}](https://github.com/RFlanagan82)

    Email: [${data.Email}](mailto:flanagan.ryan@gmail.com)
  
    `;}
  
  module.exports = generateMarkdown;
  