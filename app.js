const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
//Global array that contains all of the employee info.
const employeeInfo = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const userQuestions = [
    {
        type: "list",
        name: "role",
        message: "What is your employee's position?",
        choices: [
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
]
//Setting up function for manager specific question.
function managerQuestions() {
    const employeeManager = [
        {
            type: "input",
            name: "office-number",
            message: "What is the manager's office number?"
        },
    ]
    askQuestion(employeeManager);
}
//setting up function for engineer specific question.
function engineerQuestions() {
    const employeeEngineer = [
        {
            type: "input",
            name: "GitHub",
            message: "What is your engineer's GitHub profile?"
        },
    ]
    askQuestion(employeeEngineer);
}
//setting up function for intern specific question.
function internQuestions() {
    const employeeIntern = [
        {
            type: "input",
            name: "intern-school",
            message: "What is your intern's university?"
        },
    ]

    askQuestion(employeeIntern);
}
//setting up function for general employee questions.
function employeeQuestions() {
    const questionsForAll = [
        {
            type: "input",
            name: "employee-name",
            message: "What is this employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is this employee's id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is this employee's email?"
        },
    ]
    askQuestion(questionsForAll);
}
//function that calls const depending on role picked.
function askQuestion(questions) {
    inquirer.prompt(questions)
}

inquirer.prompt(userQuestions)
    .then(function (answer) {
        ///determine which role was selected
        switch (answer.role) {
            case "Engineer":
                //run engineer function
                engineerQuestions();
                break;
            case "Manager":
                //run manager function
                managerQuestions();
                break;
            case "Intern":
                //run Intern function
                internQuestions();
                break;
        }
    })



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
