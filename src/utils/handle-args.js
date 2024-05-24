// Task Handlers
const { handleHelp } = require("../tasks/show-help");
const { colorize } = require("colorize-node");

const supportedArgPairs = [
  ["-h", "--help", "Displays help information"],
  ["-v", "--version", "Displays program version information"],
];

const supportedArgs = new Set(
  supportedArgPairs.flatMap((item) => [item[0], item[1]])
);

function validateArgs(args) {
  const argsValueMappings= {};
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const nextArg = args[i + 1];
    if (supportedArgs.has(arg)) {
      argsValueMappings[arg] = nextArg;
    } else {
      console.log(`Unknown argument: ${colorize.red(arg)}`);
      handleHelp(supportedArgPairs);
      process.exit(1);
    }
  }
}

function handleArgs(args) {
  validateArgs(args);
  if (args[0] === "-h" || args[0] === "--help") {
    handleHelp(supportedArgPairs);
  }
}

module.exports = { handleArgs }