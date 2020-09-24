// function to generate markdown for README
function generateMarkdown(data) {
    let licenseText = "";
    if (data.license === "APACHE 2.0"){
        data.badge = str.link("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
    } else if (data.license === "Boost 1.0"){
        data.badge = str.link("[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)");
    } else if (data.license === "BSD"){
        data.badge = str.link("[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)");
    } else if (data.license === "Eclipse 1.0"){
        data.badge = str.link("[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)");
    } else if (data.license === "IBM 1.0"){
        data.badge = str.link("[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)");
    } else if (data.license === "MIT"){
        data.badge = str.link("![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
    } else if (data.license === "None"){
        data.badge = "None"
    }

    return `
    
    # Title
    ${data.Title}

    ## Badge
    ${data.Badge}
  
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
    ${licenseText}

    ## Questions
    Contact:

    Github: [${data.userName}](https://github.com/RFlanagan82)

    Email: [${data.Email}](mailto:flanagan.ryan@gmail.com)
  
    `;}
  
  module.exports = generateMarkdown;
  