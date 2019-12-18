DROP DATABASE IF EXISTS company_personnel_db;

CREATE DATABASE company_personnel_db;

USE company_personnel_db;


CREATE TABLE department (
    id INT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
    );

CREATE TABLE perosnnel_role (
    id INT AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    PRIMARY KEY(id)
    );

CREATE TABLE employee (
    id  INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id)
  );