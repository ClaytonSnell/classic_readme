// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const { writeFile } = require('fs').promises;
//const generateMarkdown = require("./utils/generateMarkdown");

const generateReadme = ({ title, description, usage, installation, contributing, email, github, license}) =>
    `# ${title}
  
## Table of Contents
- [Project description](#Description)
- [Usage](#Usage)
- [contribution](#Contribution)
- [Installation](#Installation)
- [Questions](#Questions)
- [license](#license)
    
## Description
${description}
  
## Usage
${usage}

## Installation
${installation}

## Contribution
${contributing}

## Questions
${email}

${github}

## license
${license}

     `;
// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Describe your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter Table of contents.',
            name: 'contents',
        },
        {
            type: 'input',
            message: 'Instalation procedure?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How will this project be Used?',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Licenses Used?',
            name: 'license',
            choices: ['MIT', 'Apache', 'Boost', 'ISC']
        },
        {
            type: 'input',
            message: 'Contributing',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'Tests?',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Add email info for questions',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Add github info for questions',
            name: 'github',
        },
    ])
    // Used example from the mini project, changed HTML with Markedown or READme 
    .then((answers) => {
        const readmeContent = generateReadme(answers);

        fs.writeFile('README.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });


/*// Youtube vid way of returning aswers from inquirer
 function runQuery() {
   return inquirer.prompt(questions)
       .then((answers => {
           console.log(answers)
           return answers
       }))
       .catch((error) => {
           console.log(error)
       })
   }

runQuery()






/* Pass your questions in here
])
.then((answers) => {
// Use user feedback for... whatever!!
})
.catch((error) => {
if (error.isTtyError) {
 // Prompt couldn't be rendered in the current environment
} else {
 // Something else went wrong
}
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app 
init(); 
const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile('README.md', generateHTML(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };
  
  init();*/
