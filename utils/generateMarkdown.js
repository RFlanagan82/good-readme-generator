// function to generate markdown for README
function generateMarkdown(data) {
    let licenseText = "";
    if (data.License === "APACHE 2.0"){
        data.badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        licenseText = 
`Copyright [2020] [${data.name}]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`

    } else if (data.License === "Boost 1.0"){
        data.badge = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (data.License === "BSD"){
        data.badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else if (data.License === "Eclipse 1.0"){
        data.badge = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    } else if (data.License === "IBM 1.0"){
        data.badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (data.License === "MIT"){
        data.badge = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (data.License === "None"){
        data.badge = "None"
    } else {
        console.log("Couldn't get badge.");
    }

    return `
# Title
${data.Title}

## License Badge
${data.badge}

## Table of Contents
* [Description](#description)
* [Installation requirements](#installation)
* [Usage Information](#usage)
* [Credits / Contributions](#contributors)
* [Resources](#resources)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)

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
Contact:[${data.name}]

Github: [${data.userName}](https://github.com/RFlanagan82)

Email: [${data.Email}](mailto:flanagan.ryan@gmail.com)

    `;}
  
  module.exports = generateMarkdown;
  