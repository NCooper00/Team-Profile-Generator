const inquirer = require('inquirer');
const fs = require('fs');
const htmlBuilder = require('./utility/buildhtml');
const managerCardBuilder = require('./utility/buildmanagercard');
const engineerCardBuilder = require('./utility/buildengineercard');
const internCardBuilder = require('./utility/buildinterncard');
const { type } = require('os');


// Actions needed

// Inquire for manager info
    // Build manager html function
        // Ask what they would like to do next

// Inquire for engineer info
    // Build engineer html function
        // Ask what they would like to do next

// Inquire for intern info
    // Build intern html function
        // Ask what they would like to do next

// Create html function: combine the result from the
// builds above and write it to an html document

const managerQuestions = {
    managerName: "What is your team manager's name?",
    managerId: "What is your team manager's id?",
    managerEmail: "What is your team manager's email?",
    managerOfficeNum: "What is your team manager's office number?",
};
const {managerName, managerId, managerEmail, managerOfficeNum} = managerQuestions;

const engineerQuestions = {
    engineerName: "What is your engineer's name?",
    engineerId: "What is your engineer's id?",
    engineerEmail: "What is your engineer's email?",
    engineerGithub: "What is your engineer's GitHub username?",
};
const {engineerName, engineerId, engineerEmail, engineerGithub} = engineerQuestions;

const internQuestions = {
    internName: "What is your intern's name?",
    internId: "What is your intern's id?",
    internEmail: "What is your intern's email?",
    internSchool: "What is your intern's school?",
};
const {internName, internId, internEmail, internSchool} = internQuestions;



function buildManager() {
    inquirer.prompt([
        {
            name: 'managerName',
            type: 'input',
            message: managerName,
        },
        {
            name: 'managerId',
            type: 'input',
            message: managerId,
        },
        {
            name: 'managerEmail',
            type: 'input',
            message: managerEmail,
        },
        {
            name: 'managerOfficeNum',
            type: 'input',
            message: managerOfficeNum,
        },
        {
            name: 'type',
            type: 'list',
            message: 'What type of team member would you like to add?',
            choices: ["Engineer", "Intern", "I don't want any more team members"],
        },
    ])
    .then((response) => {
        console.log(response);
        const newManager = managerCardBuilder(response);
        newManager;
        console.log(newManager);
        if (response.type === "I don't want any more team members") {
            const newHTML = htmlBuilder(response);
            writeToFile('myteam.html', newHTML)
        } else if (response.type === "Intern") {
            buildIntern();
        } else if (response.type === "Engineer") {
            buildEngineer();
        } else {
            console.log("weird it's broken")
        }
    })
};

function buildEngineer() {
    inquirer.prompt([
        {
            name: 'engineerName',
            type: 'input',
            message: engineerName,
        },
        {
            name: 'engineerId',
            type: 'input',
            message: engineerId,
        },
        {
            name: 'engineerEmail',
            type: 'input',
            message: engineerEmail,
        },
        {
            name: 'engineerGithub',
            type: 'input',
            message: engineerGithub,
        },
    ])
    .then((response) => {
        console.log(response);
    })
};

function buildIntern() {
    inquirer.prompt([
        {
            name: 'internName',
            type: 'input',
            message: internName,
        },
        {
            name: 'internId',
            type: 'input',
            message: internId,
        },
        {
            name: 'internEmail',
            type: 'input',
            message: internEmail,
        },
        {
            name: 'internSchool',
            type: 'input',
            message: internSchool,
        },
    ])
    .then((response) => {
        console.log(response);
    })
};

function writeToFile(fileName, htmlData) {
    fs.writeFile(
        fileName,
        htmlData,
        (err) => err ? console.error(err) : console.log('My Team HTML generated!'));
}


function initialize() {
    buildManager();
};



// Initialization call
initialize();