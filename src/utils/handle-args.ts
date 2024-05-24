import { SupportedArgs } from "./types";

const supportArgPairs: SupportedArgs[][] = [
  ["-h", "--help"],
  ["-v", "--version"],
];

const supportedArgs: Set<SupportedArgs> = new Set(
  supportArgPairs.flatMap((item) => item)
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

export { validateArgs };
