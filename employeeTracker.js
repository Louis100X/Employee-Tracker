// var express = require("express");
var mysql = require("mysql");
var inquirer = require("inquirer");
// Create express app instance.
// var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Escondido1",
  database: "company_personnel_db"
});

// Initiate MySQL Connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});












function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Add departments, roles, employees",
        "View departments, roles, employees",
        "Update employee roles"
      ]
    })
    .then(function (answer) {
      switch (answer.action) {
        case "Add departments, roles, employees":
          add();
          break;

        case "View departments, roles, employees":
          view();
          break;

        case "Update employee roles":
          //   rangeSearch();
          break;
      }
    });
}

function add() {
  inquirer.prompt({
    name: "queryChoice",
    type: "rawlist",
    message: "What would you like to add?",
    choices: [
      "Departments",
      "Roles",
      "Employee"
    ]
  }).then(function (query) {
    switch (query.queryChoice) {
      case "Departments":
        addDepartment();
        break;

      case "Roles":
        addRole();
        break;

      case "Employee":
        addEmployee();
        break;
    }
  });
}

function addDepartment() {
  inquirer.prompt([{
    name: "departmentID",
    type: "input",
    message: "What is the department ID?",
  },
  {
    name: "departmentName",
    type: "input",
    message: "What is the department name?",
  }
  ]).then(function (departmentData) {
    console.log(departmentData.departmentID);
    console.log(departmentData.departmentName);
    var tableInsert = "INSERT INTO department (id, departmentName) VALUES (?, ?)"; console.log(query);
    // departmentData.departmentID;
    // departmentData.departmentName;
    connection.query(tableInsert, function (res) {
      console.log(res);
    });

  });
};

function addRole() {
  inquirer.prompt([{
    name: "roleID",
    type: "input",
    message: "What is the role ID?",
  },
  {
    name: "roleTitle",
    type: "input",
    message: "What is the role title?",
  },
  {
    name: "roleSalary",
    type: "input",
    message: "What is the role salary?",
  },
  {
    name: "roleID",
    type: "input",
    message: "What is the department ID?",
  }
  ]).then(function (roleData) {
    console.log(roleData);
    var roleInsert = "INSERT INTO department (id, departmentName) VALUES (?, ?)";
    console.log(roleInsert);
    connection.query(tableInsert, function (res) {
      console.log(res);
    });

  });
};

function addEmployee() {
  inquirer.prompt([
    {
      name: "employeeID",
      type: "input",
      message: "What is the employee ID?",
    },
    {
      name: "firstName",
      type: "input",
      message: "What is the employee first name?",
    },
    {
      name: "LastName",
      type: "input",
      message: "What is the employee last name?",
    },
    {
      name: "roleID",
      type: "input",
      message: "What is the role ID?",
    },
    {
      name: "managerID",
      type: "input",
      message: "What is the manager ID?",
    }
  ]).then(function (employeeData) {
    console.log(employeeData);
    var employeeInsert = "INSERT INTO department (id, departmentName) VALUES (?, ?)";
    console.log(roleInsert);
    connection.query(tableInsert, function (res) {
      console.log(res);
    });

  });
};





function view() {
  inquirer.prompt({
    name: "queryChoice",
    type: "rawlist",
    message: "What would you like to view?",
    choices: [
      "Departments",
      "Roles",
      "Employee"
    ]
  }).then(function (query) {
    switch (query.queryChoice) {
      case "Departments":
        viewDepartment();
        break;

      case "Roles":
        viewRole();
        break;

      case "Employee":
        viewEmployee();
        break;
    }
  });
}

runSearch();




