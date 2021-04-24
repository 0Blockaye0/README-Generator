
const inquirer = require("inquirer");
const generateMarkdown = require("./Develop/utils/generateMarkdown.js");
const fs = require("fs");
//const { writeFile } = require("node:fs");

const promptUser = () => {
  return (
    inquirer
      .prompt([
        {
          type: "input",
          name: "userName",
          message: "Please enter your git hub user name. (Required)",
          validate: (userNameInput) => {
            if (userNameInput) {
              return true;
            } else {
              console.log(
                "Username is required. Please enter your git hub user name."
              );
              return false;
            }
          },
        },
        {
          type: "input",
          name: "repoName",
          message: "Please enter your repos root directory name.",
          validate: (repoNameInput) => {
            if (repoNameInput) {
              return true;
            } else {
              console.log(
                "Your repos root directory name is required. Please enter your repos root directory name."
              );
              return false;
            }
          },
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
            "Provide instructions and examples for use.",
        },
        {
          type: "input",
          name: "screenshot",
          message: 
            "To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, we will add it to your README using the following syntax: EXAMPLE: ![alt text](./assets/images/<screenshot.png>) Just enter the file between the < > in the example", 
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
          message: "Provide a license ",
          choices: [
            "MIT",
            "GNU General Public License v3.0",
            "Apache License 2.0",
            "ISC License",
          ],
        },
        {
          type: "input",
          name: "features",
          message:
            "Please describe any features that you would like provide more detail to.",
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
          message: 
            "Let others know how to contribute.",
        },
        {
          type: "input",
          name: "email",
          messages: 
            "Please enter your email address.",
        },
      ])
      .then((readmeData) => {
        return generateMarkdown(readmeData);
      })
      .then((readmeFile) => {
        return writeToFile("./Develop/README.md", readmeFile);
      })
      .catch((err) => {
        console.log(err);
      })
  );
};

// function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created",
      });
    });
  });
}

// starts the app
////////////////
promptUser(); //
////////////////