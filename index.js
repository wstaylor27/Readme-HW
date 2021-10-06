// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is your repository title?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter a repository title.')
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is your description of this project?',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('Please describe the project.')
      }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the installation instructions?',
    validate: installInput => {
      if (installInput) {
        return true;
      } else {
        console.log('Please enter installation instructions.')
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please state usage information.')
      }
    }
  },
  {
    type: 'input',
    name: 'guidelines',
    message: 'Enter the contribution guidelines',
    validate: guidelinesInput => {
      if (guidelinesInput) {
        return true;
      } else {
        console.log('Please enter contribution guidelines')
      }
    }
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter your how tested the project',
    validate: testsInput => {
      if (testsInput) {
        return true;
      } else {
        console.log('Please enter how you tested your project')
      }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Choose a license for your application',
    choices: ['MIT', 'GNU', 'ISC', 'Apache', 'None'],
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log('Please pick a license')
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username.')
      }
    }
  }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeToFile(fileName, data, (err) => {
    if (err)
    throw err;
    console.log('Success!')
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
})}

// Function call to initialize app
init();
