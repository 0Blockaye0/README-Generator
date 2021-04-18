// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");
const fs = require("fs");
//const { writeFile } = require("node:fs");

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "userName",
        message: "Please enter your git hub user name. (Required)",
        validate: (userNameInput) => {
          if (userNameInput) {
            return true;
          } else {
            console.log("Username is required. Please enter your git hub user name.");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "repoName",
        message: "Please enter your repos root directory name.",
        validate: (repoNameInput) => {
          if (repoNameInput) {
            return true;
          } else {
            console.log("Your repos root directory name is required. Please enter your repos root directory name.");
            return false;
          }
        }
      },
      {
        type: "input",
        name: "title",
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
        name: "description",
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
        name: "link",
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
        name: "installation",
        message:
          "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.",
      },
      {
        type: "input",
        name: "usage",
        message:
          "Provide instructions and examples for use. Include screenshots as needed.",
      },
      {
        type: "input",
        name: "credits",
        message:
          "List your collaborators, if any, with links to their GitHub profiles.",
      },
      {
        type: "checkbox",
        name: "license",
        message: "Provide a license ", ////////COME BAK TO THIS PART////////
        choices: ["MIT", "GNU General Public License v3.0", "Apache License 2.0", "ISC License"],
      },
      {
        type: "input",
        name: "features",
        message:
          "Please describe any features the you would like provide more detail to.",
      },
      {
        type: "input",
        name: "tests",
        message:
          "Please describe any test that your project has and explain how to run them.",
      },
      {
        type: "input",
        name: "contributing",
        message: "Let others know how to contribute.",
      },
      {
        type: "input",
        name: "questions",
        message:
          "Let other know how they can reach you for any additional questions they may have.",
      },
    ])
    .then((readmeData) => {
      return generateMarkdown(readmeData);
    })
    .then(readmeFile => {
      return writeToFile('./Develop/dist/README.md', readmeFile);
    })
    // .then(writeFileResponse => {
    //   console.log(writeFileResponse);
    //   return copyFile();
    // })
    // .then(copyFileResponse => {
    //   console.log(copyFileResponse);
    // })
    .catch(err => {
      console.log(err);
    });
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created"
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

///////////////
promptUser();
///////////////
