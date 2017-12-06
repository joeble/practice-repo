const fs = require('fs')
const http = require('http')
const map = require('through2-map')

const server = http.createServer((req, res) => {

  const stream = fs.createReadStream(process.argv[3])

  // stream.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)

})
server.listen(process.argv[2])
