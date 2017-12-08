const http = require('http')
const map = require('through2-map')

const server = http.createServer((req, res) => {
  // make sure its a post request
  if (req.method !== 'POST') return res.end('send me a POST\n')

  // transform data to uppercase
  req.pipe(map((chunk) => {
    return chunk.toString().toUpperCase()
  })).pipe(res)
})

server.listen(process.argv[2])
