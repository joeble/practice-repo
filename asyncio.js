// takes in a file asyncronously and prints number of new lines
// must use a callback function

const fs = require('fs')

const callbackFunction = (err, data) => {
	console.log(data.toString().split('\n').length - 1)
}

fs.readFile(process.argv[2], callbackFunction)
