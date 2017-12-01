const filterDirectory = require('./modulefile.js')

const arg1 = process.argv[2]
const arg2 = process.argv[3]

const directory = arg1
const filter = arg2

const callback = (err, list) => {
	if (err) {
		return console.error('Here is an error:', err)
	}

	list.forEach((item) => {
		console.log(item)
	})
	
}

filterDirectory(directory, filter, callback)