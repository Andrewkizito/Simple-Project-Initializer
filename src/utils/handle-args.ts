import { SupportedArgs } from "./types";

const helperText = `
Usage: simple-project-initializer [options]

Version: 2.5.0

Options:
`

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
      throw new Error(`Invalid argument: ${arg}`);
    }
  }
}

function handleArgs(args: string[]) {
  if (args[0] === "-h" || args[0] === "--help") {
    console.log(helperText);
    for (const item of supportArgPairs) {
      console.log(`  ${item[1]}\t\t ${item[2]}`);
    }
  }
}

export { validateArgs, handleArgs };
