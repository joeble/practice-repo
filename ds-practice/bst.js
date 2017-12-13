/**
 * Binary Search Tree
 * - Each value has it's own tree functions.
 * - Several functions: insert, contains, forEach, size
 */
function BinarySearchTree (value) {
  this.treeSize = 1
  this.value = value
  this.left = null
  this.right = null

  this.breadthFirstArray = []
}

/**
 * insert: compares new value with already existing values in the tree and inserts new value appropriately. left is less than. right is greater than.
 */
BinarySearchTree.prototype.insert = function (value) {
  // increase the size
  this.treeSize++

  // check if new value is inserted to the right or left
  if (this.value < value){
  // greater values go right
    if (this.right) {
      // if right exists, recursively inserts there
      this.right.insert(value)
    } else {
      this.right = new BinarySearchTree(value)
    }
  } else {
  // lesser values go left
    if (this.left) {
      // if left already exists, try to insert there again
      this.left.insert(value)
    } else {
      this.left = new BinarySearchTree(value)
    }

  }
}

/**
 * contains: returns true or false depending on whether or not the tree contains the given value
 */
BinarySearchTree.prototype.contains = function (value) {
  if (this.value === value) {
    return true
  } else if (this.value < value && this.right) {
    return this.right.contains(value)
  } else if (this.value > value && this.left) {
    return this.left.contains(value)
  } else {
    return false
  }
}

/**
 * Depth First For Each: takes a function and an option. Applies the function to each value in the tree. Option determines traversal type.
 */
BinarySearchTree.prototype.depthFirstForEach = function (fnc, option) {

  if (option === "in-order" || !option) {
    // runs in order by default or if specified
    if (this.left) {
      this.left.depthFirstForEach(fnc)
    }
    fnc(this.value)
    if (this.right) {
      this.right.depthFirstForEach(fnc)
    }
  }

  if (option === "pre-order") {
    // also runs in pre-order if specified
    fnc(this.value)
    if (this.left) {
      this.left.depthFirstForEach(fnc, 'pre-order')
    }
    if (this.right) {
      this.right.depthFirstForEach(fnc, 'pre-order')
    }
  }

  if (option === "post-order") {
    // also runs in post-order if specified
    if (this.left) {
      this.left.depthFirstForEach(fnc, 'post-order')
    }
    if (this.right) {
      this.right.depthFirstForEach(fnc, 'post-order')
    }
    fnc(this.value)
  }
}

/**
 * Breadth First For Each:
 */
BinarySearchTree.prototype.breadthFirstForEach = function (fnc) {
  this.makeBreadthFirstArray()
  this.breadthFirstArray.forEach((val) => {
    if(val !== null)
      return fnc(val)
  })
}

// make an array of values in breadth first order
BinarySearchTree.prototype.makeBreadthFirstArray = function (position, node) {
  let pos = position || 0
  let currNode = node || this

  this.breadthFirstArray[pos] = currNode.value
  if (currNode.left) {
    this.makeBreadthFirstArray(pos * 2 + 1, currNode.left)
  }
  if (currNode.right) {
    this.makeBreadthFirstArray(pos * 2 + 2, currNode.right)
  }

}

BinarySearchTree.prototype.size = function () {
  return this.treeSize
}
