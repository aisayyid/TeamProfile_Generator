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


// const that prompts questions for all employees, no matter the role.
const questionsForAll = [
    {
        type: "input",
        name: "name",
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
//List to select what type of employee you would like to add.
 const userQuestions = [
    {
        type: "list",
        name: "role",
        message: "What is your employee's position?",
        choices: [
            "Manager",
            "Engineer",
            "Intern",
            "Stop adding employees to team."
        ]
    },
 ]
 //Setting up function for manager specific question.
 async function managerQuestions() {
    const employeeManager = [
        {
            type: "input",
            name: "officenumber",
            message: "What is the manager's office number?"
        },
    ]
     //concat method to bring in the questionsForAll array once employee manager has gone through.
    //made it into an object to easily transfer data to class.
    const answers = await inquirer.prompt(employeeManager.concat(questionsForAll));

    //Creating a new manager usign the class of Intern
    const manager = new Manager(answers);
    //pushing new manager into the global array of employees.
    employeeInfo.push(manager);
    addEmployee();
 }
 //setting up function for engineer specific question.
 async function engineerQuestions() {
    const employeeEngineer = [
        {
            type: "input",
            name: "GitHub",
            message: "What is your engineer's GitHub profile?"
        },
    ]
    //concat method to bring in the questionsForAll array once employee engineer has gone through.
    //made it into an object to easily transfer data to class.
    const answers = await inquirer.prompt(employeeEngineer.concat(questionsForAll));

    //Creating a new Engineer usign the class of Intern
    const engineer = new Engineer(answers);
    //pushing new Engineer into the global array of employees.
    employeeInfo.push(engineer);
    addEmployee();
 }
 //setting up function for intern specific question.
 async function internQuestions() {
    const employeeIntern = [
        {
            type: "input",
            name: "school",
            message: "What is your intern's university?"
        },
    ]
    //concat method to bring in the questionsForAll array once employee intern has gone through.
    //made it into an object to easily transfer data to class.
    const answers = await inquirer.prompt(employeeIntern.concat(questionsForAll));

    //Creating a new intern usign the class of Intern
    const intern = new Intern(answers);
    //pushing new Intern into the global array of employees.
    employeeInfo.push(intern);
    addEmployee();
 }
 //function that calls const depending on role picked.
//  function askQuestion(questions) {
//     inquirer.prompt(questions)
//  }
function addEmployee(){
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
            //once the user is done adding employees, the function to generate the html is called.
                default:
               writeFile();
        }
    })
}
//Function for generating html file with the team.
function writeFile () {

fs.writeFile(outputPath, render(employeeInfo), function (err) {

    if (err) {
        return console.log(err);
    }

    console.log("HTML generation successfull!");

});
}
addEmployee();

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
