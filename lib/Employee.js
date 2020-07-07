// TODO: Write code to define and export the Employee class
class Employee {
    //List of variables that all employees share witin a constructor.
    constructor(name, id, email) {

        this.name = name;
        this.id = id;
        this.email = email
    }
}
//module export so class can be read in other js files.
module.exports = Employee;
