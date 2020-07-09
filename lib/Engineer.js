// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
//Requiring Employee.js to inherit the class.
const Employee = require("./Employee");

class Engineer extends Employee {
    //Adding github for engineers.
    constructor({ name, id, email, github }) {
        //Super inheriting attributes from Employee class.
        super(name, id, email);
        this.github = github;
    }
    //Adding methods to gather info for Engineer
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}
//Making Engineer info avaialable to other files.
module.exports = Engineer;