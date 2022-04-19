const Employee = require("./Employee");

let Intern = function(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

Intern.prototype = Object.create(Employee.prototype);

Intern.prototype = {
    getRoll() {
        return 'intern';
    }
  };
module.exports = Intern;