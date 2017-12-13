function HashTable(num) {
  this.numBuckets = num || 35
  this.table = []
}

HashTable.prototype.set = function(key, value) {
  if (typeof key !== 'string') throw TypeError('Keys must be strings')

  // creates an empty object for keys and values to be stored if first in bucket
  if (this.table[this.hash(key)] === undefined)
    this.table[this.hash(key)] = {}

  // stores key and value
  this.table[this.hash(key)][key] = value
}

HashTable.prototype.get = function(key) {
  return this.table[this.hash(key)][key]
}

/**
 Hashes a string by adding the character code and modding by the number of buckets.
 */
HashTable.prototype.hash = function(str) {
  let sum = 0
  for (let i = 0; i < str.length; i++){
    sum += +str.charCodeAt(i)
  }
  return sum % this.numBuckets
}

HashTable.prototype.hasKey = function(key) {
  if (this.table[this.hash(key)] === undefined) {
    // checks to see if the buck is initialized
    return false
  } else if (this.table[this.hash(key)][key] === undefined) {
    // checks to see if the key in the bucket exists
    return false
  } else {
    return true
  }
}
