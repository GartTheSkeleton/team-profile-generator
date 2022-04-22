const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');

let name = ''
let id = ''
let email = ''
let office = ''
let github = ''
let school = ''
let roll = ''

let newEmployee = ''

let teamRoster = [];

let clearData = function(){
    name = ''
    id = ''
    email = ''
    office = ''
    github = ''
    school = ''
    roll = ''

    newEmployee = ''
}


//Manager Questions
const managerQuestions = [
      {
        type: 'input',
        name: 'name',
        message: "What is your Manager's name?",
        validate: name => {
          if (name) {
            return true;
          } else {
            console.log("Please enter your Manager's name!");
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your Manager's ID?",
        validate: id => {
          if (id) {
            return true;
          } else {
            console.log('Please enter your Manager ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your Manager's email address?",
        validate: email => {
          if (email) {
            return true;
          } else {
            console.log('Please enter your Manager email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'office',
        message: "What is your Manager's office number?",
        validate: office => {
          if (office) {
            return true;
          } else {
            console.log('Please enter your office number!');
            return false;
          }
        }
      }
    ];
const switchQuestion = [
    {
        type: 'list',
        name: 'switch',
        message: "How will you proceed?",
        choices: ["Add Engineer", "Add Intern", "Finish and Generare HTML"]
    }
]
const engineerQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is your Engineer's name?",
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log("Please enter your Engineer's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your Engineer's ID?",
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log('Please enter your Engineer ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your Engineer's email address?",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter your Engineer email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is your Engineer's GitHub username?",
      validate: office => {
        if (office) {
          return true;
        } else {
          console.log("Please enter your Engineer's GitHub!");
          return false;
        }
      }
    }
  ];
  const internQuestions = [
    {
      type: 'input',
      name: 'name',
      message: "What is your Intern's name?",
      validate: name => {
        if (name) {
          return true;
        } else {
          console.log("Please enter your Intern's name!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your Intern's ID?",
      validate: id => {
        if (id) {
          return true;
        } else {
          console.log("Please enter your Intern's ID!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your Intern's email address?",
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter your Intern's email!");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "What is your Intern's school?",
      validate: school => {
        if (school) {
          return true;
        } else {
          console.log("Please enter your Intern's school!");
          return false;
        }
      }
    }
  ];

//Once this is done, create the manager object using Manager.js and feeding it the answers
let createManager = function()
  {
    newEmployee = new Manager(name, id, email, office);

    teamRoster.push(newEmployee);

    console.log(teamRoster);

    switchMenu();
  }

//Menu to add an Engineer or Intern or Finish
let switchMenu = function()
  {
    inquirer.prompt(switchQuestion).then(inquirerResponses => {
        let switchAnswer = inquirerResponses.switch;
        switch (switchAnswer) {
            case "Add Engineer":
                createEngineer();
                break;
            case "Add Intern":
                createIntern();
                break;
            case "Finish and Generare HTML":
                endApp();
                break;
        }
    });
  }
 
//Engineer module
let createEngineer = function()
    {
        inquirer.prompt(engineerQuestions).then(inquirerResponses => {
            clearData();
            name = inquirerResponses.name
            id = inquirerResponses.id
            email = inquirerResponses.email
            github = inquirerResponses.github
            //create the employee object
            newEmployee = new Engineer(name, id, email, github)
            //push object into the team roster
            teamRoster.push(newEmployee);
            //console log the roster for safety
            console.log(teamRoster);
            //return to the switch menu
            switchMenu();
        })
    }

//Intern module
let createIntern = function()
    {
        inquirer.prompt(internQuestions).then(inquirerResponses => {
            clearData();
            name = inquirerResponses.name
            id = inquirerResponses.id
            email = inquirerResponses.email
            school = inquirerResponses.school
            //create the employee object
            newEmployee = new Intern(name, id, email, school)
            //push object into the team roster
            teamRoster.push(newEmployee);
            //console log the roster for safety
            console.log(teamRoster);
            //return to the switch menu
            switchMenu();
        })
    }
//if finish
let endApp = function()
    {
        console.log("Generating HTML....")
        
        const pageHTML = generatePage(teamRoster);

        console.log(pageHTML);
            fs.writeFile('./dist/index.html', pageHTML, err => {
              if (err) throw new Error(err);
              console.log('Page created! Check out index.html in the /dist directory to see it!');
            });
    }

let init = function() {
    inquirer.prompt(managerQuestions).then(inquirerResponses => {
        //console.log(inquirerResponses.name);
        name = inquirerResponses.name
        id = inquirerResponses.id
        email = inquirerResponses.email
        office = inquirerResponses.office
        createManager();
    })
}
//run the program
init();