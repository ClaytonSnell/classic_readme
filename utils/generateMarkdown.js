// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    mit: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    appache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
  return badges[license]; 
}

console.log(renderLicenseBadge)

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    mit: '[MIT] https://choosealicense.com/licenses/mit/',
    isc: '[ISC] https://choosealicense.com/licenses/isc/',
    apache: '[apache] https://choosealicense.com/licenses/apache-2.0/',
    boost: '[boost] https://choosealicense.com/licenses/bsl-1.0/'
  }

  return licenseLinks[license]
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `Licensed under ${this.renderLicenseLink(license)} license`,
    else {
      return ''
    }
  }
}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
 // return `# ${data.title}

module.exports = generateMarkdown;
