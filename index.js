const inquirer = require("inquirer");
const fs = require('fs');
const axios = require('axios');
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "gitname",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description of the project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please explain the usage for your project:"
    }