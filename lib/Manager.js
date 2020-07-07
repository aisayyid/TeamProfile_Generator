// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    //Adding office number for managers.
    constructor(officeNumber) {
        //Super inheriting attributes from Employee class.
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}
//Making Manager info avaialable to other files.
module.exports = Manager;