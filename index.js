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

let clearData = function(){
    let name = ''
    let id = ''
    let email = ''
    let office = ''
    let github = ''
    let school = ''
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


//Once this is done, create the manager object using Manager.js and feeding it the answers
let createManager = function()
  {
    let newEmployee = new Manager(name, id, email, office)

    console.log(newEmployee);
  }

//Menu to add an Engineer or Intern or Finish
let switchMenu = function()
  {

  }

//Engineer module
//First prompt name
//Second prompt ID
//Third prompt email

//if Engineer then prompt github
//return to menu

//if intern then prompt school
//return to menu

//if finish
//end app and generate html

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