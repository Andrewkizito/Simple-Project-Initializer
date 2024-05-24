#!/usr/bin/env node
import { colorize } from "colorize-node";
import { handleArgs } from "./utils/handle-args";

(function main () {
  const program_args = process.argv.slice(2);
  if (program_args.length === 0) {
    console.log(colorize.red("No arguments provided"));
    return;
  }

  handleArgs(program_args);
})();
