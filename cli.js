#!/usr/bin/env node
import md2html from "./index.js";

if (process.argv.length < 3) {
  process.exit(1);
}

const input = process.argv[2];

md2html(input)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
