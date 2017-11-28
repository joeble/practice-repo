const fs = require('fs')

// exports the extension filter function
module.exports = function (directoryName, extensionToFilterBy) {

	//
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
}