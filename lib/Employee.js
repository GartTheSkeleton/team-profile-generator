
let Employee = function(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
}

Employee.prototype = {
    getName() {
    //look at inquirer results
    },
    getId() {
        //look at inquirer results
    },
    getEmail() {
        //look at inquirer results
    },
    getRoll() {
        return 'employee';
    } 
  };

module.exports = Employee;
