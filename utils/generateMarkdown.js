// function to generate markdown for README
function generateMarkdown(data) {
    return `
    
    # Title
    ${data.title}
  
    ## Table of Contents
    *[Description](#description)
    *[Installation requirements](#installation)
    *[Usage Information](#usage)
    *[License](#license)
    *[Credits / Contributions](#contributors)
    *[Resources](#resources)
    *[Tests](#tests)
    *[Questions](#questions)

    ## Description
    ${data.Description}

    ## Installation Requirements
    ${data.Installation}

    ## Usage Information
    ${data.Usage}

    ## License
    ${data.License}

    ## Credits & Contributions
    ${data.Contributors}

    ## Resources
    ${data.Resources}

    ## Tests
    ${data.Tests}

    ## Questions
    Contact:

    Github: [${data.userName}](https://github.com/RFlanagan82)

    LinkedIn: [${data.linkedInProfile}](https://www.linkedin.com/in/ryanflanagan82/)

    Email: [${data.Email}](mailto:flanagan.ryan@gmail.com)
  
    `;}
  
  module.exports = generateMarkdown;
  