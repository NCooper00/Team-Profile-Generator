const inquirer = require('inquirer');
const fs = require('fs');
const generator = require('./utility/generateHTML');


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
    ])
    .then((response) => {
        console.log(response);
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

function buildHTML() {

};

function initialize() {
    buildManager();
};



// Initialization call
initialize();