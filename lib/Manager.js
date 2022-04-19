const Employee = require("./Employee");

let Manager = function(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype = {
    getRoll() {
        return 'manager';
    }
  };
module.exports = Manager;