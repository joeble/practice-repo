const net = require('net')

const server = net.createServer((socket) => {
  //socket logic
  const date = new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const min = date.getMinutes()

  // write formatted
  socket.end(`${year}-${(month < 10)?'0'+month:month}-${(day < 10)?'0'+day:day} ${(hour < 10)?'0'+hour:hour}:${(min < 10)?'0'+min:min}\n`)

})
server.listen(process.argv[2])



