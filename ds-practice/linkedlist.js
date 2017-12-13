function LinkedList () {
  this.head = null
  this.tail = null
}

// a Node object to represent each value in line
function Node (value) {
  this.value = value
  this.next = null
  this.previous = null
}

LinkedList.prototype.addToTail = function (value) {

  // create node to be added to tail
  const newNode = new Node(value)

  // adds the new tail where it belongs
  if (this.tail){
    this.tail.next = newNode
    newNode.previous = this.tail
  } else {
    // in case its the first node
    this.head = newNode
  }
  this.tail = newNode
}

LinkedList.prototype.addToHead = function (value) {
  // create node to be added to tail
  const newNode = new Node(value)

  // adds the new head  where it belongs
  if (this.head){
    this.head.previous = newNode
    newNode.next = this.head
  } else {
    // in case its the first node
    this.tail = newNode
  }
  this.head = newNode
}

LinkedList.prototype.removeTail = function () {
  if (!this.tail) return undefined

  // makes a new node for the return value
  const removedTail = new Node(this.tail.value)

  // repairs the remaining nodes
  if (this.head === this.tail) {
    // in case it is the only node
    this.head = null
    this.tail = null
  } else {
    this.tail = this.tail.previous
    this.tail.next = null
  }

  // returns just the value, not the object
  return removedTail.value
}

LinkedList.prototype.removeHead = function () {
  if (!this.head) return undefined

  // makes a new node for the return value
  const removedHead = new Node(this.head.value)

  // repairs the remaining nodes
  if (this.head === this.tail) {
    // in case it is the only node
    this.head = null
    this.tail = null
  } else {
    this.head = this.head.next
    this.head.previous = null
  }

  // returns just the value, not the object
  return removedHead.value
}

LinkedList.prototype.search = function (value, node) {
  // determines if current node is passed or starting from head
  const currentNode = node || this.head

  // determines boolean results in case of function or string
  let checkedValue = false
  if (typeof value === 'function') {
    checkedValue = value(currentNode.value)
  } else {
    checkedValue = (value === currentNode.value)
  }

  // determines what to return or if recursion is necessariy
  if (checkedValue) {
    return currentNode.value
  } else if (currentNode.next) {
    return this.search(value, currentNode.next)
  } else {
    return null
  }

}
