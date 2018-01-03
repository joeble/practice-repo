

var pathExists = function (graph, start, end) {
  // two lists to keep track of what we've come across and what needs to be checked
  let hasBeenAdded = []
  let toBeChecked = []
  // adds starting point neighbors to both lists
  graph[start].forEach(val => {
    toBeChecked.push(val)
    hasBeenAdded.push(val)
  })
  // counter of where we are checking
  let count = 0

  while (toBeChecked.length > count) {
    // check that bad boy
    if(toBeChecked[count] === end){
      // you found the end!
      return true
    }

    // if there are children
    if (toBeChecked[count].length > 0){
      // check to see if each have already been added
      graph[toBeChecked[count]].forEach(val => {
        if (!hasBeenAdded.includes(val)){
          // check and add them if not
          toBeChecked.push(val)
          hasBeenAdded.push(val)
        }
      })
    }
    // move on to the next  item to be checked
    count++
  }

  // no end in sight... :<
  return false
}
