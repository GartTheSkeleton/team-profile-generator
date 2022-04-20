const Employee = require("./Employee");

let Manager = function(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype = {
    getRoll() {
        return 'Manager';
    }
  };
module.exports = Manager;