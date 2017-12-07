// MY SOLUTION
const http = require('http')
const bl = require('bl')

const args = process.argv
const strings = []
let count = 0
const maxCount = args.length - 2

for (let i = 2; i < args.length; i++) {
  // request for data stream
  http.get(args[i], (res) => {
    // put all the chunks together
    res.pipe(bl((err, data) => {
      if (err !== null) console.error(err)

      // strore each string and increase count
      strings[i] = data.toString()
      count++

      // if count is max, then print results in proper order
      if (count === maxCount) {
        for (let i = 2; i < args.length; i++) {
          console.log(strings[i])
        }
      }

    }))
  })
}
