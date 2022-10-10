// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generatemarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"title",
        message:"What's the title of this repo on Github?"
    },
    {
        type:"input",
        name:"description",
        message:"What is the project about? Provide a detailed description explaining the following: What was your motivation? Why did you build this project? What problem does it solve?"
    },
    {
        type:"input",
        name:"tableOfContents",
        message:"Table of Contents? Just press enter."
    },
    {
        type:"input",
        name:"installation",
        message:"What does the user need to install to run this app? List them. ",
    },
    {
        type:"input",
        name:"usage",
        message:"How is the app used? Provide instructions. Include screenshots as needed."
    },
    {
        type:"input",
        name:"license",
        message:"What license are you using for your project?",
        choices: ["BSD 3-Clause License", "Apache 2.0 License", "Boost Software License 1.0"]
    },
        {
        type:"input",
        name:"contributing",
        message:"explain how other contributors can add to the project"
    },
    {
        type:"input",
        name:"tests",
        message:"provide test instructions for your application"
    },
    {
        type:"input",
        name:"githubUser",
        message:"Enter your github username:"
    },
    {
        type:"input",
        name:"email",
        message:"Enter your email address. This is so that users can  contact you in case of any questions:"
    },
    
];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions
) .then(function(answers){
console.log("thisIsAnswers", answers)
console.log("thisIsTitle", answers.title)
var readMeTemplate = generatemarkdown(answers)
console.log(readMeTemplate)
fs.writeFile("readmegenerator.md", readMeTemplate, function(error){
    if (error){
        console.log(error)
    } 
    console.log("successfully created")
})
})

}

// Function call to initialize app
init();

// let for variables that need to change over time 
// const for variables that should never be reassigned 




// console.log("Node is working");


// const readMeDataArgs = process.argv.slice(2, process.argv.length);
// const title = readMeDataArgs [0];

// const [name, github] = readMeDataArgs;


// const generatePage = (userName, githubName) => {
//     return`
//         Name: ${userName}
//         Github: ${githubName}
//         `;
// };
// console.log(name, github);
// console.log(generatePage(name, github));











/* Notice they have to just be questions, not anything crazy! */

/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/



// const fs = require('fs'); //

// const http = require('http') //
