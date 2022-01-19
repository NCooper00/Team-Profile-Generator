const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee.class');
const Manager = require('./lib/Manager.class');
const Engineer = require('./lib/Engineer.class');
const Intern = require('./lib/Intern.class');
const render = require('./lib/htmlBuilder')
const { type } = require('os');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "myteam.html");


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

const myTeam = []

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
            const newManager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNum);
            myTeam.push(newManager);
        if (response.type === "I don't want any more team members") {
            generateTeam();
            console.log("Your team has been generated!");
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
        {
            name: 'type',
            type: 'list',
            message: 'What type of team member would you like to add?',
            choices: ["Engineer", "Intern", "I don't want any more team members"],
        },
    ])
    .then((response) => {
        const newEngineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
        myTeam.push(newEngineer);
        if (response.type === "I don't want any more team members") {
            generateTeam();
            console.log("Your team has been generated!");
        } else if (response.type === "Intern") {
            buildIntern();
        } else if (response.type === "Engineer") {
            buildEngineer();
        } else {
            console.log("weird it's broken")
        }
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
        {
            name: 'type',
            type: 'list',
            message: 'What type of team member would you like to add?',
            choices: ["Engineer", "Intern", "I don't want any more team members"],
        },
    ])
    .then((response) => {
        const newIntern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
        myTeam.push(newIntern);
        if (response.type === "I don't want any more team members") {
            generateTeam();
            console.log("Your team has been generated!");
        } else if (response.type === "Intern") {
            buildIntern();
        } else if (response.type === "Engineer") {
            buildEngineer();
        } else {
            console.log("weird it's broken")
        }
    })
};

function generateTeam() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(myTeam), "utf-8")
}

function initialize() {
    buildManager();
};

// Initialization call
initialize();