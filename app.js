const chalk = require("chalk")
const yargs = require("yargs")

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: function (argv) {
        console.log("Title: " + argv.title)
        console.log("Body: " + argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function () {
        console.log("Removed the note")
    }
})

yargs.command({
    command: "list",
    describe: "Lists all notes",
    handler: function (argv) {
        console.log("List all notes")
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log("Reading the note")
    }
})

yargs.parse();