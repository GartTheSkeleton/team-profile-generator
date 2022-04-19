const Employee = require("./Employee");

let Engineer = function(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
}

Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype = {
    getRoll() {
        return 'engineer';
    }
  };
module.exports = Engineer;