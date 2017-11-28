const fs = require('fs')

const arg1 = process.argv[2]
const arg2 = process.argv[3]

const directoryName = arg1
const extensionToFilterBy = arg2


// read the files from the named directory
fs.readdir(directoryName, (err, list) => {
	//console.log(list)

	// filter list by extension
	list.forEach((item) => {
		if (item.includes('.' + extensionToFilterBy)) {
			// print item
			console.log(item)
		}
	})
})
