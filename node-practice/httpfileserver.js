const fs = require('fs')
const http = require('http')

// create server
const server = http.createServer((req, res) => {
  // write a header to avoid errors
  res.writeHead(200, {'content-type': 'text/plain'})

  // stream file content from 2nd arg
  const stream = fs.createReadStream(process.argv[3])
  // pipe steam to res
  stream.pipe(res)
})
server.listen(process.argv[2])
