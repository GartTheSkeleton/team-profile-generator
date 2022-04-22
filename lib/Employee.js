
let Employee = function(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    this.roll = 'Employee';
}

Employee.prototype = {
    getName() {
     return this.name;
    },
    getId() {
     return this.id;
    },
    getEmail() {
     return this.email;
    },
    getRoll() {
     return this.roll;
    } 
  };

module.exports = Employee;
