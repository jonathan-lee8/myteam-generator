const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const { type } = require('os');

function Generate() {
  this.manager;
  this.engineer = [];
  this.intern = [];
}

Generate.prototype.promptManager = function() {
  return inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: `Please enter the manager's name:`,
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log(`Please enter a name!`);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: `Employee ID:`,
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log(`Please enter a valid ID!`);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: `Email:`,
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log(`Please enter a valid email address!`);
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNum',
      message: `Office Number:`,
      validate: officeNumInput => {
        if (officeNumInput) {
          return true;
        } else {
          console.log(`Please enter an office number!`);
          return false;
        }
      }
    },
  ])
  .then(({ name, id, email, officeNum }) => {
    this.manager = new Manager(name, id, email, officeNum);
    this.initMainMenu();
  })
};

Generate.prototype.initMainMenu = function() {
  return inquirer
  .prompt([
    {
      type: "list",
      name: 'menu',
      message: "What would you like to do?",
      choices: ["Add Engineer", "Add Intern", "No more employees - Generate my profiles!"]
    }
  ])
  .then(({ menu }) => {
    if (menu === "Add Engineer") {
      this.promptEngineer();
    }
    if (menu === "Add Intern") {
      this.promptIntern();
    }
    if (menu === "No more employees - Generate my profiles!") {
      console.log(this.manager);
      console.log(this.engineer);
      console.log(this.intern);
      this.generateHTML();
    }
  })
};

Generate.prototype.promptEngineer = function() {
  return inquirer
  .prompt([
    {
    type: "list",
    name: "name",
    message: `Engineer name:`,
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log(`Please enter a name!`);
        return false;
      }
    }
    },
    {
      type: "list",
      name: "id",
      message: `ID:`,
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log(`Please enter a valid ID!`);
          return false;
        }
      }
      },
      {
        type: "list",
        name: "email",
        message: `Email Address:`,
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter a valid email!`);
            return false;
          }
        }
        },
        {
          type: "list",
          name: "github",
          message: `GitHub UserName:`,
          validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log(`Please enter a GitHub Username!`);
              return false;
            }
          }
        },
  ])
  .then(({ name, id, email, github }) => {
    this.engineer.push(new Engineer(name, id, email, github));
    this.initMainMenu();
  })
};
