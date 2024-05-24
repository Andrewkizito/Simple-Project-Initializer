let helperText = `
Usage: simple-project-initializer [options]

Version: 2.5.0

Options:
`

function handleHelp(supportedArgPairs) {
    for (const item of supportedArgPairs) {
        helperText = helperText.concat(`  ${item[1]}\t\t ${item[2]}\n`);
    }
    process.stdout.write("\n" + helperText);
    process.exit(0);
}

module.exports = { handleHelp }