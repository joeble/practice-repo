const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
  // check for GET
  if (req.method !== 'GET') return res.end('Needs a GET request!!!')

  // set content type to JSON
  res.writeHead(200, { 'Content-Type': 'application/json'})

  // make a date object
  const urlData = url.parse(req.url, true)
  const date = new Date(urlData.query.iso)

  if (urlData.pathname === '/api/parsetime') {
    // handles parse timex
    res.end(JSON.stringify({
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    }))

  } else if (urlData.pathname === '/api/unixtime') {
    // handles unix time
    res.end(JSON.stringify({ 'unixtime': date.getTime()}))

  } else {
    res.writeHead(404)
    res.end('invalid')
  }

})
server.listen(process.argv[2])
