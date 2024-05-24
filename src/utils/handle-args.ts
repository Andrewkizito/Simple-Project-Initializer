// Types
import type { SupportedArgs } from "./types";

// Task Handlers
import { handleHelp } from "../tasks/show-help";
import { colorize } from "colorize-node";

const supportArgPairs: [SupportedArgs, SupportedArgs, string][] = [
  ["-h", "--help", "Displays help information"],
  ["-v", "--version", "Displays program version information"],
];

const supportedArgs: Set<SupportedArgs> = new Set(
  supportArgPairs.flatMap((item) => [item[0], item[1]])
);

function validateArgs(args: string[]) {
  const argsValueMappings: Record<string, string> = {};
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const nextArg = args[i + 1];
    if (supportedArgs.has(arg as SupportedArgs)) {
      argsValueMappings[arg] = nextArg;
    } else {
      console.log(`Unknown argument: ${colorize.red(arg)}`);
      handleHelp()
    }
  }
}

function handleArgs(args: string[]) {
  validateArgs(args);
  if (args[0] === "-h" || args[0] === "--help") {
    handleHelp();
  }
}

export { supportArgPairs, handleArgs };
