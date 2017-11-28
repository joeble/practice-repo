// takes in a file syncronously and prints number of new lines

const fs = require('fs')

const fileName = process.argv[2]

// fs.readFileSync() gets a file syncronously
const buf = fs.readFileSync(fileName)

const str = buf.toString().split('\n')

const length = str.length - 1

console.log(length)