const filterDirectory = require('./modulefile.js')

const arg1 = process.argv[2]
const arg2 = process.argv[3]

const directoryName = arg1
const extensionToFilterBy = arg2

// runs the imported module
filterDirectory(directoryName, extensionToFilterBy)