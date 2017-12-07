function Queue () {
  this.queueSize = 0
  this.head = null
  this.tail = null
}

// a node object to represent each value in line
function Node (value, prev, next) {
  this.value = value
  this.prev = prev || null
  this.next = next || null
}

Queue.prototype.enqueue = function (value) {
  // increase queue size
  this.queueSize++
  // make a new mode
  let newNode = new Node(value, this.tail)
  // assign to end of the queue
  if (this.tail) {
    this.tail.next = newNode
  } else {
    this.head = newNode
  }
  this.tail = newNode
}

Queue.prototype.dequeue = function () {
  // handle underflow
  if (this.head == null) return undefined
  // decrease queue size
  this.queueSize--
  // make a new node for return value
  const dequeuedNode = new Node(this.head.value)
  // swap out the head for the next in line
  if (this.head === this.tail) {
    // in case of only one node in queue
    this.head = null
    this.tail = null
  } else {
    // in case of multiple nodes in queue
    this.head = this.head.next
    this.head.prev = null
  }
  // return dequeued value
  return dequeuedNode.value
}

Queue.prototype.size = function () {
  return this.queueSize
}
