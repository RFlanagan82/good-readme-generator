# good-readme-generator
To create a command-line application that dynamically generates a professional README.md from a user's input using the Inquirer Package.

## Deployed Application Review
[Watch the video demonstrating the application here:](https://drive.google.com/file/d/1lnz4wXe1dVYFKx_dVniaFutdR-Hhfuyy/view)

## Contents
This application contains the following elements:

* [index.js](https://github.com/RFlanagan82/good-readme-generator/blob/master/index.js)
* [generateMarkdown.js](https://github.com/RFlanagan82/good-readme-generator/blob/master/utils/generateMarkdown.js)
* [Instructions.md] - Link referenced in Installation Requirements
* [package.JSON]
* [package-lock.JSON]
* [.gitignore]
* [node_modules]

All can be accessed via [this repository](https://github.com/RFlanagan82/good-readme-generator).

## Installation Requirements
These are referenced in the Submission Requirements section within [instructions.md](https://github.com/RFlanagan82/good-readme-generator/blob/master/instructions.md)

## Usage Information
This application requires the following technologies and packages to work:

*[Node.Js]
*[Inquirer Package]
*[FS Package]

To start, clone this repo and run your terminal from index.js, on the command line via node index.js.

Once opened, you will be asked a series of questions to help you complete your fully generated readme.md file.

![](/assets/Readme%20Generator%20questions.png)

## Credits & Contributions
On 9-24-2020, I worked with tutor Andrew Hardemon - who helped me format my template literals for the dynamically generated License texts, license badges and helped me add my DS_Store file in the .gitignore file.

## Resources
  *[Markdown License badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba) 
  *[JavaScript String Link Method](https://www.w3schools.com/jsref/jsref_link.asp) 
  *[Adding Badges to Readme Files](https://lgtm.com/help/lgtm/adding-badges-to-project-readme-files)
  *[Badge Generator - Shields.io](https://shields.io/)
  *[Mastering Markdown](https://guides.github.com/features/mastering-markdown/)
  * GT-FT Unit 1_Supplimental Resources - Good ReadMe guide

## Tests
I ran my initial test in terminal on 9-23-2020.

As you can see I am able to have my generator template questions running in the terminal.

![](/assets/Good%20Readme%20Generator%20HW_Test%20in%20Terminal_9-23.png)

An ititial challenge was in getting the selected license to show dynamically into the generated readme.

![](/assets/Difficulties%20Testing%20the%20license%20badge%20for%20selected%20license%20in%20ReadMe%20Generator.png)

I reformated the licenseText using template literals and pushed them all to the far left of the panel so they read as markdown, then ran another test to validate.

![](assets/assets/Correcting%20the%20formatting%20of%20my%20template%20iterals%20for%20the%20license%20text.png)


## Badge
https://img.shields.io/badge/RFlanagan82-Do%20it%20for%20the%20users-green

## License
Copyright 2020 - <Ryan Flanagan>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
