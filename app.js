// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "Title",
        message: "What is the title of your project? (Required)",
        validate: (titleInput) => {
          if (titleInput) {
            return true;
          } else {
            console.log("Please enter the title!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Description",
        message: "Please write a description of your project",
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log(
              "You better write a description so your users know what your project is about!"
            );
            return false;
          }
        },
      },
      {
        type: "confirm",
        name: "linkConfirm",
        message: "Would you like to include a link to the deployed project?",
        default: true,
      },
      {
        type: "input",
        name: "Link",
        message: "Go ahead and enter your link now.",
        when: ({ linkConfirm }) => {
          if (linkConfirm) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "Installation",
        message:
          "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      },
      {
        type: "input",
        name: "Usage",
        message:
          "Provide instructions and examples for use. Include screenshots as needed.",
      },
      {
        type: "input",
        name: "Credits",
        message:
          "List your collaborators, if any, with links to their GitHub profiles.",
      },
      {
        type: "list",
        name: "License",
        message: "Provide a license ", ////////COME BAK TO THIS PART////////
        choices: [""],
      },
      {
        type: "input",
        name: "Features",
        message:
          "Please describe any features you would like provide detail to.",
      },
      {
        type: "input",
        name: "Tests",
        message:
          "PLease describe any test that your project has and explain how to run them.",
      },
      {
        type: "input",
        name: "Contributing",
        message: "If you want others to contribute, let them know how here!",
      },
    ])
    .then((readmeData) => {
      //////////////
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


///////////////
promptUser();
///////////////