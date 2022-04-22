const Employee = require("./Employee");

let Intern = function(name, id, email, school) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.roll = "Intern"
}

Intern.prototype = Object.create(Employee.prototype);

Intern.prototype = {
    getSchool() {
        return this.school;
    },
    getRoll() {
        return this.roll;
    }
  };
module.exports = Intern;