const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
// const { type } = require('os');

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
    type: "input",
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
      type: "input",
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
        type: "input",
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
          type: "input",
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
        }
  ])
  .then(({ name, id, email, github }) => {
    this.engineer.push(new Engineer(name, id, email, github));
    this.initMainMenu();
  })
};

Generate.prototype.promptIntern = function() {
  return inquirer
  .prompt([
      {
          type: 'input',
          name: 'name',
          message: "Intern's name:",
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
          message: "Intern ID:",
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
          message: "Email:",
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
          type: "input",
          name: "school",
          message: "Name of School:",
          validate: officeNumberInput => {
              if (officeNumberInput) {
                  return true;
              } else {
                  console.log("Please enter a school name!");
                  return false;
              }
          }
      }
  ])
  .then(({ name, id, email, school }) => {
      this.intern.push(new Intern(name, id, email, school));
      this.initMainMenu();
  })
};

Generate.prototype.generateHTML = function() {
  fs.writeFile('./dist/index.html',
  `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <h1>My Team</h1>
            <main>
            ${this.generateManager()}
            ${this.generateEngineer()}
            ${this.generateIntern()}
            </main>
        </body>
        </html>
        `,
        'utf8', err => {
            if (err) {
                throw (err);
            }
            console.log('File created!');
    });
};

Generate.prototype.generateManager = function() {
  return `
  <div class="card">
      <h2>${this.manager.getName()}</h2>
      <h3>${this.manager.getRole()}</h3>
      <p>ID: ${this.manager.getId()}</p>
      <p>Email: <a class="link" target = _blank href="mailto:${this.manager.getEmail()}">${this.manager.getEmail()}</a></p>
      <p>Office Number: ${this.manager.getOfficeNum()}</p>
  </div>
  `
};

Generate.prototype.generateEngineer = function() {
  return `
      ${this.engineer.map(eng => {
          return `
              <div class="card">
                  <h2>${eng.getName()}</h2>
                  <h3>${eng.getRole()}</h3>
                  <p>ID: ${eng.getId()}</p>
                  <p>Email: <a class="link" target = _blank href="mailto:${eng.getEmail()}">${eng.getEmail()}</a></p>
                  <p>GitHub: <a class="link" target = _blank href="https://github.com/${eng.getGithub()}">${eng.getGithub()}</a></p>
              </div>
          `
      })}
  `
};

Generate.prototype.generateIntern = function() {
  return `
      ${this.intern.map(int => {
          return `
              <div class="card">
                  <h2>${int.getName()}</h2>
                  <h3>${int.getRole()}</h3>
                  <p>ID: ${int.getId()}</p>
                  <p>Email: <a class="link" target = _blank href="mailto:${int.getEmail()}">${int.getEmail()}</a></p>
                  <p>School: "${int.getSchool()}</p>
              </div>
          `
      })}
  `
};

module.exports = Generate;