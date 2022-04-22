const Employee = require("./Employee");

let Manager = function(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.office = office
    this.roll = "Manager"
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype = {
    getRoll() {
        return this.roll;
    }
  };

module.exports = Manager;