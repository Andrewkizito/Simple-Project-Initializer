import { supportArgPairs } from "../utils/handle-args"

const helperText = `
Usage: simple-project-initializer [options]

Version: 2.5.0

Options:
`

function handleHelp() {
    console.log(helperText);
    for (const item of supportArgPairs) {
        console.log(`  ${item[1]}\t\t ${item[2]}`);
    }
    process.exit(0);
}

export { handleHelp }