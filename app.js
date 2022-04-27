const express = require('express');
const inquirer = require("inquirer");
const axios = require("axios");

async function main() {
    await getAllRepos();
    await getRamdaPulls();
    await getCdnjsPulls();
    await getEslintPulls();
    await ramdaFanPulls();
    await ramdaHighPulls();
    await ramdaLogicPulls();
    await ramdaAngularPulls();
    await ramdaRepl();
};

async function getAllRepos() {
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "gitHub",
            message: "App initiated?"
        }
    ])
    console.log(data.gitHub)

    const url = `https://api.github.com/users/ramda/repos`;

    const test = async () => {
        const request = await axios.get(url);

        request.data.forEach((item) => {
            console.log(item.name);
        });
    }
    test();
}


async function getRamdaPulls() {
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "pulls",
            message: "Too see all ramda repos press enter",
        }
    ])
    console.log(data.pulls)

    const url = `https://api.github.com/repos/ramda/ramda/pulls`

    const runRamda = async () => {
        const request = await axios.get(url);

        request.data.forEach((item) => {
            console.log(item.number);
        })
    }
    runRamda();
}

async function getCdnjsPulls() {
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "pulls",
            message: "To see all cdnjs pull requests press enter",
        }
    ])
    console.log(data.pulls)

    const url = `https://api.github.com/repos/ramda/cdnjs/pulls`

    const runCdjns = async () => {
        const request = await axios.get(url);

        request.data.forEach((item) => {
            console.log(item.number);
        })
    }
    runCdjns();
}

async function getEslintPulls() {
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "pulls",
            message: "To see all eslint-plugin-ramda pull requests press enter",
        }
    ])
    console.log(data.pulls)

    const url = `https://api.github.com/repos/ramda/eslint-plugin-ramda/pulls`

    const runEslint = async () => {
        const request = await axios.get(url);

        request.data.forEach((item) => {
            console.log(item.number);
        })
    }
    runEslint();
}

async function ramdaFanPulls() {
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "pulls",
            message: "To see all ramda-fantasy pull requests press enter",
        }
    ])
    console.log(data.pulls)

    const url = `https://api.github.com/repos/ramda/ramda-fantasy/pulls`

    const runRamFan = async () => {
        const request = await axios.get(url);

        request.data.forEach((item) => {
            console.log(item.number);
        })
    }
    runRamFan();
}

async function ramdaHighPulls() {
    const data = await inquirer.prompt([
        {
            type: "input",
            name: "pulls",
            message: "To see all ramda-highland pull requests press enter",
        }
    ])
    console.log(data.pulls)

    const url = `https://api.github.com/repos/ramda/ramda-highland/pulls`

    const runRamHigh = async () => {
        const request = await axios.get(url);

        request.data.forEach((item) => {
            console.log(item.number);
        })
    }
    runRamHigh();
}



async function ramdaLogicPulls() {
    const data = await inquirer.prompt([
        {
            type: "confirm",
            name: "pulls",
            message: "To see all ramda-logic pull requests press enter",
            choices: ['yes', 'no']
        }
    ])
    console.log(data.pulls)

    const url = `https://api.github.com/repos/ramda/ramda-logic/pulls`

    const runRamHigh = async () => {
        const request = await axios.get(url);

        request.data.forEach((item) => {
            console.log(item.number);
        })
    }
    runRamHigh();
}

async function ramdaAngularPulls() {
    const data = await inquirer.prompt([
        {
            type: "confirm",
            name: "pulls",
            message: "To see all ramdaangular pull requests press enter",
            choices: ['yes', 'no']
        }
    ])
    console.log(data.pulls)

    const url = `https://api.github.com/repos/ramda/ramda-angular/pulls`

    const runAng = async () => {
        const request = await axios.get(url);

        request.data.forEach((item) => {
            console.log(item.number);
        })
    }
    runAng();
}

async function ramdaRepl() {
    const data = await inquirer.prompt([
        {
            type: "confirm",
            name: "pulls",
            message: "To see all repl pull requests press enter",
            choices: ['yes', 'no']
        }
    ])
    console.log(data.pulls)

    const url = `https://api.github.com/repos/ramda/repl/pulls`

    const runRamRep = async () => {
        const request = await axios.get(url);

        request.data.forEach((item) => {
            console.log(item.number);
        })
    }
    runRamRep();
}
main();