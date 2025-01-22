function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/license-${license.replace(' ', '%20')}-blue)`;
}

function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `- [License](#license)`;
}

function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License\n\nThis project is licensed under the ${license} license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions, reach out to me on [GitHub](https://github.com/${data.github}) or email me at ${data.email}.
`;
}

export default generateMarkdown;