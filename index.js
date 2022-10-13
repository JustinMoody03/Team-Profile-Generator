const createManager = require("./src/manager")
const inquirer = require("inquirer")

const cards = []

const questions = [
    {
        type:"list",
        name:"choice",
        message:"What kind of employee would you like to make?",
        choices:[
            "manager"
        ]
    }
]

function loop(){
inquirer.prompt(questions)
.then(function(answers){
    switch(answers.choice){
        case"manager":
        createManager()
        .then(loop)
        return
        case"end":
        outputHtml()
    }
})
}

function outputHtml(){
    
}

createManager()
.then(function(html){
    cards.push(html);
})
