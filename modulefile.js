const fs = require('fs')
const path = require('path')

const myFunction = (directory, extension, callback) => {
	fs.readdir(directory, (err, list) => {
		if (err) {
			callback(err)
		} else {
			return callback(null, list.filter((item) => {
				return path.extname(item) === ('.'+ extension)
			}))
		}
	})
}


// exports the extension filter function
module.exports = myFunction