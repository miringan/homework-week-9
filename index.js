const inquirer = require("inquirer");
const fs = require("fs");
const { generateReadMe } = require("./template");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "githubName",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your project's name?",
      name: "projectName",
    },
    {
      type: "input",
      message: "Please write a short description of your project.",
      name: "description",
    },
    {
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ['MIT', 'Apache', 'BSD', 'GPL'],
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "dependency",
        default: "npm i",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm test",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "needToKnowUse",
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "needToKnowContributions",
    },
  ])
  .then((data) => {
    fs.writeFile("generatedREADME.md", generateReadMe(data), (err) =>
    err ? console.error(err) : console.log('Success!')
    );
  })

// Need to add a template.js file and do module exports.