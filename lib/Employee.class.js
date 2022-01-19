class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee"
    }
}

/*
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        // if (managerRole === "Manager") {
        inquirer.prompt([
            {
                name: 'managerName',
                type: 'input',
                message: Questions.managerQuestions.managerName,
            },
        ])
        .then(name = response);
        console.log(name);
    // } else if (this.getRole() === "Engineer") {
    //         inquirer.prompt([
    //             {
    //                 name: 'engineerName',
    //                 type: 'input',
    //                 message: Questions.engineerQuestions.engineerName,
    //             },
    //         ])
    //         .then(name = response);
    //     } else if (this.getRole() === "Intern") {
    //             inquirer.prompt([
    //                 {
    //                     name: 'internName',
    //                     type: 'input',
    //                     message: Questions.internQuestions.internName,
    //                 },
    //             ])
    //             .then(name = response);
    //         } else {
    //                 console.log("Whatever you did is not a valid option!")
    //             }
    }
    

    getId() {
        if (roles === "Manager") {
            inquirer.prompt([
                {
                    name: 'managerId',
                    type: 'input',
                    message: Questions.managerQuestions.managerId,
                },
            ])
            .then(id = response);
            console.log(id);
        } else if (this.getRole() === "Engineer") {
                inquirer.prompt([
                    {
                        name: 'engineerId',
                        type: 'input',
                        message: Questions.engineerQuestions.engineerId,
                    },
                ])
                .then(id = response);
            } else if (this.getRole() === "Intern") {
                    inquirer.prompt([
                        {
                            name: 'internId',
                            type: 'input',
                            message: Questions.internQuestions.internId,
                        },
                    ])
                    .then(id = response);
                } else {
                        console.log("Whatever you did is not a valid option!")
                    }
    }

    getEmail() {
        if (roles === "Manager") {
            inquirer.prompt([
                {
                    name: 'managerEmail',
                    type: 'input',
                    message: Questions.managerQuestions.managerEmail,
                },
            ])
            .then(email = response);
        } else if (this.getRole() === "Engineer") {
                inquirer.prompt([
                    {
                        name: 'engineerEmail',
                        type: 'input',
                        message: Questions.engineerQuestions.engineerEmail,
                    },
                ])
                .then(email = response);
            } else if (this.getRole() === "Intern") {
                    inquirer.prompt([
                        {
                            name: 'internEmail',
                            type: 'input',
                            message: Questions.internQuestions.internEmail,
                        },
                    ])
                    .then(email = response);
                } else {
                        console.log("Whatever you did is not a valid option!")
                    }
    }

    getRole() {
        inquirer.prompt ([
            {
                name: 'type',
                type: 'list',
                message: 'What type of team member would you like to add?',
                choices: ["Manager", "Engineer", "Intern", "I don't want any more team members"],
            },
        ])
        .then((response) => {
            console.log(response);
        })
    }
};
*/
module.exports = Employee;