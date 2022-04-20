const Employee = require("./Employee");

let Engineer = function(name, id, email, github) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
}

Engineer.prototype = Object.create(Employee.prototype);

Engineer.prototype = {
    getGithub() {
        return `https://github.com/${this.github}`;
    },
    getRoll() {
        return 'Engineer';
    }
  };
module.exports = Engineer;