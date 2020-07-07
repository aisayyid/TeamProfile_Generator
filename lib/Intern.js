// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//Requiring Employee.js to inherit the class.
const Employee = require("./Employee");

class Intern extends Employee {
    //Adding school for interns.
    constructor(name, id, email, school) {
        //Super inheriting attributes from Employee class.
        super(name, id, email);
        this.school = school;
    }
    //Added methods to gather info for interns.
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}
//Making Engineer info avaialable to other files.
module.exports = Intern;