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
]).then(function(response) {
    let {name,gitname,title,description,usage} = response;
    let avatarUrl;
    let email;
    let queryUrl = `https://api.github.com/users/${gitname}`;
    axios.get(queryUrl).then(
        (response) => {
            //console.log(response);
            avatarUrl = response.data.avatar_url;
            
            if(email==null) {
                email = ".";
            } else {
                email = ", or email me at " + response.data.email + ".";
            };

            let filename = name.toLowerCase().split(' ').join('_') + ".md";