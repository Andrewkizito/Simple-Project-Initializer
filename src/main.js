#!/usr/bin/env node
const { colorize } =  require("colorize-node");
const { handleArgs } =  require("./utils/handle-args");

(function main () {
  const program_args = process.argv.slice(2);
  if (program_args.length === 0) {
    console.log(colorize.red("No arguments provided"));
    process.exit(1);
  }

  handleArgs(program_args);
})();
