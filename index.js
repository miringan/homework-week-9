// Imported modules
const inquirer = require("inquirer");
const fs = require("fs");
const { generateReadMe } = require("./template");


inquirer
  .prompt([
    {
      // Ask for the user's name.
      type: "input",
      message: "What is your name?",
      name: "name",
    },
    {
      // Ask for the creation date of the project.
      type: "input",
      message: "What date did you create your project?",
      name: "creationDate",
    },
    {
      // Ask for the user's GitHub username.
      type: "input",
      message: "What is your GitHub username?",
      name: "githubName",
    },
    {
      // Ask for the users email address.
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      // Ask the user for the project's name.
      type: "input",
      message: "What is your project's name?",
      name: "projectName",
    },
    {
      // Ask the user for the description of the project.
      type: "input",
      message: "Please write a short description of your project.",
      name: "description",
    },
    {
      // Ask the user for what license they want to implement on their project.
      type: "list",
      message: "What kind of license should your project have?",
      name: "license",
      choices: ['MIT', 'Apache', 'BSD 3-Clause', 'GPL'],
    },
    {
      // Ask the user for installation instructions.
      type: "input",
      message: "What command should be run to install dependencies?",
      name: "dependency",
      default: "npm i",
    },
    {
      // Ask the user for what tests need to be run for their project.
      type: "input",
      message: "What command should be run to run tests?",
      name: "tests",
      default: "npm test",
    },
    {
      // Ask the user if there are anything else that people would need to know about their project.
      type: "input",
      message: "What does the user need to know about using the repo?",
      name: "needToKnowUse",
    },
    {
      // Ask the user for instructions on how to contribute to their project.
      type: "input",
      message: "What does the user need to know about contributing to the repo?",
      name: "needToKnowContributions",
    },
  ])
  .then((data) => {
    // Write the README with data from the answered questions from .prompt.
    fs.writeFile("generatedREADME.md", generateReadMe(data), (err) =>
    err ? console.error(err) : console.log('Success!')
    );
  })