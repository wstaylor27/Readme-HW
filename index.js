// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is your description of this project?',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
  },
  {
    type: 'input',
    name: 'guidelines',
    message: 'Enter the contribution guidelines',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter your your tests',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Choose a license for your application',
  },
  {
    type: 'input',
    name: 'Github',
    message: 'Enter your GitHub username',
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
