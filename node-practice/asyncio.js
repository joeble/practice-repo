// takes in a file asyncronously and prints number of new lines
// must use a callback function

const fs = require('fs')

const callback = (err, data) => {
	if (err) console.error(err)
	console.log(data.toString().split('\n').length - 1)
}

fs.readFile(process.argv[2], callback)
