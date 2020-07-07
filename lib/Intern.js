// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require("./Employee");

class Intern extends Employee {
    //Adding school for interns.
    constructor(school) {
        //Super inheriting attributes from Employee class.
        super(name, id, email);
        this.school = school;
    }
}
//Making Engineer info avaialable to other files.
module.exports = Intern;