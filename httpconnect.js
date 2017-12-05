// MY SOLUTION
const http = require('http')
const bl = require('bl')

http.get(process.argv[2], (res) => {

  res.pipe(bl((err, data) => {

    if (err !== null) console.error(err)

    const dataString = data.toString()
    // line 1 gives the number of chars
    console.log(dataString.length)
    // line 2 gives the string
    console.log(dataString)
  }))
})

// GIVEN SOLUTION
// virtually the same except for a few conventional differences
