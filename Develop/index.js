import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// List of questions concerning the project
const questions = [
  { type: 'input', name: 'title', message: 'Enter the project title:' },
  { type: 'input', name: 'description', message: 'Enter the project description:' },
  { type: 'input', name: 'installation', message: 'Enter installation instructions:' },
  { type: 'input', name: 'usage', message: 'Enter usage information:' },
  { type: 'input', name: 'contributing', message: 'Enter contribution guidelines:' },
  { type: 'input', name: 'tests', message: 'Enter test instructions:' },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
  },
  { type: 'input', name: 'github', message: 'Enter your GitHub username:' },
  { type: 'input', name: 'email', message: 'Enter your email address:' },
];

// Write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md generated!')
  );
}

// Initialize the app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  });
}

// Start the app
init();