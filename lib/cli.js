#!/usr/bin/env node

const chalk = require("chalk");
const mdLinks = require("./index.js");

mdLinks(process.argv[2])
  .then((result) => result.forEach((el => {
    console.log("\n", chalk.magenta(el.href), "\n", el.text.substring(0, 50));
  })))
  .catch(console.error);