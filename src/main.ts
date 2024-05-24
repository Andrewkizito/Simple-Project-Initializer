#!/usr/bin/env node
import { colorize } from "colorize-node";
import { showLoader } from "./utils/common";
// import { validateArgs } from "./utils/handle-args";

const program_args = process.argv.slice(2);

if (program_args.length === 0) {
  console.log(colorize.red("No arguments provided"));
}

showLoader();
