// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//Requiring Employee.js to inherit the class.
const Employee = require("./Employee");

class Manager extends Employee {
    //Adding office number for managers.
    constructor(name, id, email, officeNumber) {
        //Super inheriting attributes from Employee class.
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

//Making Manager info available to other files.
module.exports = Manager;