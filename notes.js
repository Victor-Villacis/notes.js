#!/usr/bin/env node
"use strict";
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const file = "./notes.txt";
// In case you want to take in the title through the argument.
// const title = process.argv[2] || "New Note";

rl.question("What is you name?: ", (name) => {
  const author = name;
  rl.question("What title do you want this to be?: ", (titles) => {
    const title = titles;
    rl.question("Enter your thoughts: ", (post) => {
      const notes = 
`${"-".repeat(title.length + 7)}
Title: ${title}
${"-".repeat(title.length + 7)}
By ${author} on ${new Date().toLocaleString()}

${post}

`;
      fs.appendFile(file, notes, (err) => {
        if (err) {
          console.log("Unable to update");
          throw err;
        }
        rl.close();
      });
    });
  });
});
