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
    internName: "",
    internId: "",
    internEmail: "",
    internSchool: "",
};
const {internName, internId, internEmail, internSchool} = internQuestions;



function buildManager() {

};

function buildEngineer() {

};

function buildIntern() {

};

function buildHTML() {

};

function initialize() {
    buildManager();
};



// Initialization call
initialize();