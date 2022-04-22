const Employee = require("./Employee");

let Manager = function(name, id, email, officeNumber) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber
    this.roll = "Manager"
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype = {
    getRoll() {
        return this.roll;
    }
  };

module.exports = Manager;