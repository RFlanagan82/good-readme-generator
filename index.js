//Need to connect generateMarkdown.js file to here
const generateMarkdown = require("./utils/generateMarkdown.js");

//Need to connect inquirer package to application
const inquirer = require("inquirer");

//Need to connect built-in filesystem package to application
const fs = require("fs");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the project title?",
        name: "Title"
    },
    {
        type: "input",
        message:"Provide details for your project.",
        name: "Description"
    },
    {
        type: "input",
        message: "What steps are needed to install your project?",
        name: "Installation"
    },
    {
        type: "input",
        message: "Please provide instructions for use.",
        name: "Usage"
    },
    {
        type: "input",
        message: "Collaborators or credits you wish to designate?",
        name: "Contributors"
    },
    {
        type: "input",
        message: "Resources to reference?",
        name: "Resources"
    },
    {
        type: "input",
        message: "How did you test your project? Add if applicable.",
        name: "Tests"
    },
    {
        type: "list",
        message: "Select your preferred license.",
        name: "License",
        choices: [
            "APACHE 2.0",
            "Boost 1.0",
            "BSD",
            "Eclipse 1.0",
            "IBM 1.0",
            "MIT",
            "None"
        ]
    },
    {
        type: "input",
        message: "Add contact info for further questions.",
        name: "Questions",
    },
    {
        type: "input",
        message: "Provide your Github username.",
        name: "userName"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "Email"
    },
    
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
