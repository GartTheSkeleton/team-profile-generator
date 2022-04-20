
let Employee = function(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype = {
    getName() {
     return this.name;
    },
    getId() {
     return this.id
    },
    getEmail() {
     return this.email
    },
    getRoll() {
        return 'Employee';
    } 
  };

module.exports = Employee;
