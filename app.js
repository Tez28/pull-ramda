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
    await ramdaLensPulls();
    await ramdaLogicPulls();
    await ramdaGitPulls();
    await ramdaAmgularPulls();
    await ramdaRepl();
};
