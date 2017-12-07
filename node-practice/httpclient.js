// MY SOLUTION
// const http = require('http')

// const url = process.argv[2]

// const data = http.get(url, (res) => {
//   res.setEncoding('utf8')
//   res.on('data', (data) => {
//     console.log(data)
//   })
// })

// GIVEN SOLUTION
const http = require('http')

http.get(process.argv[2], (res) => {
  res.setEncoding('utf8')
  res.on('data', console.log)
  res.on('error', console.error)
}).on('error', console.error)
