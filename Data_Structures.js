// for your viewing pleasurre

// ************************************* LinkedList
function LinkedList() {
  this.head = this.tail = undefined;
}

LinkedList.prototype.addToTail = function(val) {
  var node = this.makeNode(val);
  if (!this.head) {
    this.head = this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = this.tail.next;
  }
};

LinkedList.prototype.removeFromHead = function() {
  // take the last item from the linkedlist and return it and as a word i feel
  var val = this.head.val;
  this.head = this.head.next;
  if (this.head === null) {
    this.tail = null;
  }
  return val;
};

LinkedList.prototype.contains = function(val) {
  val node = this.head;
  while (node) {
    if (node.value === val) {
      return true;
    }
    node = node.next;
  }
  return false;
};

LinkedList.prototype.makeNode = function(val) {
  var obj = {};
  obj.val = val;
  obj.next = null;
  return obj;
};
// ************************************* Stack
var Stack = function() {
  this._storage = {};
  this.size = 0;
}

Stack.prototype.push = function(val) {
  this._storage[this.size] = val;
  this.size++;
};

Stack.prototype.pop = function() {
  var val;
  this.stackSize() && this.size--;
  var val = this._storage[this.size];
  delete this._storage[this.size];
  return val;
};

Stack.prototype.stackSize = function() {
  return this.size;
};
// ************************************* Queue
var Queue = function() {
  this.start = 0;
  this.end = 0;
  this._storage = {};
}

Queue.prototype.enqueue = function(val) {
  this._storage[this.start] = val;
  this.start++;
};

Queue.prototype.dequeue = function() {
  var val = this._storage[this.end];
  delete this._storage[this.end];
  this.size() && this.end++;
  return val;
};

Queue.prototype.size = function() {
  return this.start - this.end;
};

// ************************************* Tree

var Tree = function(val) {
  this.children = [];
  this.value = val;
};

Tree.prototype.addChild = function(val) {
  var child = new Tree(val);
  this.children.push(child);
};

Tree.prototype.contains = function(target) {
  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)){
      return true;
    };
  }
  return false;
};
// ************************************* Set

var Set = function (){
  this._storage = {};
};

Set.prototype.add = function (val){
  if (this._storage[val] === undefined){
    this._storage[val] = val;
  }
};

Set.prototype.contains = function (target){
  return this._storage[target] !== undefined;
};

Set.prototype.remove = function (val){
  this._storage[val] && delete this._storage[val];
};
// ************************************* Graph

var Graph = function (){
  this.children = {};
};

Graph.prototype.addNode = function (value){
  this.children[value] = this.children[value] || {edges:[]};
};

Graph.prototype.contains = function (target){
  return this.children[target] !== undefined;
};

Graph.prototype.removeNode = function (target){
  if (this.contains(target)){
    for (var node in this.children.edges){
      this.removeEdge(node,target);
    }
  }
  delete (this.children[target]);
};

Graph.prototype.removeEdge = function (from, to){
  var start = this.children[from];
  var to = this.children[to];
  var fromIndexOfTo = this.children[from].edges.indexOf(to);
  var toIndexOfFrom = this.children[to].edges.indexOf(from);
  if (!from || !to){return null;}
  if (fromIndexOfTo > -1){
    start.edges.splice(fromIndexOfTo,1);
  }
  if (toIndexOfFrom > -1){
    to.edges.splice(toIndexOfFrom, 1);
  }
};

Graph.prototype.addEdge = function (fromNode, toNode){
  var from = this.children[fromNode];
  var to = this.children[toNode];
  if (from === undefined || to === undefined){
    return undefined;
  }
  if (from.edges.indexOf(toNode) < 0){
    from.edges.push(toNode);
  }
  if (to.edges.indexOf(fromNode) < 0){
    to.edges.push(fromNode);
  }
};

Graph.prototype.hasEdges = function (from, to){
  return this.children[from].edges.indexOf(to) > -1;
};

Graph.prototype.forEachNode = function (cb){
  for (var node in this.children){
    cb(node);
  }
};
// ************************************* HashTable
// var HashTable = function (){
//   this.limit = 4;
//   this._storage = [];
//   this.currentSize = 0;
// };

// HashTable.prototype.insert = function (key,value){
//   var hash = makeHash (key,this.limit);
//   var bucket = this._storage[hash] || [];

//   for (var i = 0; i < bucket.length; i++){
//     var tuple = bucket[i];
//       if (tuple[0] === key){
//         tuple[1] = value;
//         return;
//       }
//   }

//   bucket.push([key,value]);
//   this._storage[hash] = bucket;
//   this.currentSize++;

//   if (this.currentSize >= 0.75 * this.limit){
//     this.resize(2 * this.limit);
//   }
// };

// HashTable.prototype.retrieve = function (key){
//   var hash = makeHash(key,this.limit),
//       value,
//       bucket,
//       tuple;

//   bucket = this._storage[hash];
//   if (bucket.length === 0){
//     value = null;
//   }
//   for (var i = 0; i < bucket.length; i++){
//     tuple = bucket[i];
//     if (tuple[0] === key){
//       value = tuple[1];
//     }
//   }
//   return value;
// };

// HashTable.prototype.remove = function (key){
//   var value, hash, bucket, tuple, i;

//   hash = makeHash(key,this.limit);
//   bucket = this._storage[hash];

//   for (i = 0; i < bucket.length; i++){
//     tuple = bucket[i];
//     if (tuple[0] === key){
//       value = tuple[1];
//       delete tuple;
//       this.currentSize--;
//     }
//   }

//   if (this.currentSize <= (0.25 * this.limit)) {
//     this.resize(0.25 * this.limit);
//   }

//   return value;
// };

// HashTable.prototype.resize = function(newSize){
//   var storage = [], i, j;
//   // push all of the tuples found in the buckets into a new storage array
//   for (i = 0; i < this._storage.length; i++){
//     if (!this._storage[i]){continue;}
//     for (j = 0; j < this._storage[i].length; j++){
//       if (!this._storage[i][j]){continue;}
//       storage.push(this._storage[i][j]);
//     }
//   }
//   // reset storage size to double or half the current size
//   this.limit = newSize;
//   this._storage = [];
//   this.currentSize = 0;
//   // reinsert everything into our hashTable
//   for (i = 0; i < storage.length; i++){
//     this.insert(storage[i][0],storage[i][1]);
//   }
// };

// var makeHash = function(key,max){
//   var hash = 0;
//   for (var i = 0; i<key.length; i++){
//     hash = (hash<<5) + hash + key.charCodeAt(i);
//     hash = hash & hash;
//     hash = Math.abs(hash);
//   }
//   return hash % max
// }
var HashTable = function(maxSize){
  this._size = 0;
  this._storage = [];
  this._max = maxSize;
};

HashTable.prototype.insert = function (key,value){
  var hash = makeHash(key,this._max);
  this._storage[hash] = this._storage[hash] || [];
  var bucket = this._storage[hash];

  // in case there are already values in the bucket
  if (bucket.length > 0){
    for (var i = 0; i < bucket.length; i++){
      if (bucket[i][0] === key){
        bucket[i][1] = value;
        return;
      }
    }
  } 
  bucket.push([key,value]);
  this._size++;   
  

  if (this._size >= 0.75 * this._max){
    this.resize(this._max * 2);
  } 
};

HashTable.prototype.retrieve = function (key){
  var hash = makeHash(key, this._max), val = null, bucket;
  bucket = this._storage[hash]

  if (bucket !== undefined){
    for (var i = 0; i < bucket.length;i++){
      if (!bucket[i][0]) continue;
      else if (bucket[i][0] === key){
        val = bucket[i][1];
      }
    }
  }

  return val;
};

HashTable.prototype.remove = function (key){
  var hash = makeHash(key, this._max), val = null;
  var bucket = this._storage[hash];

  if (bucket !== undefined){
    for (var i = 0; i < bucket.length; i++){
      if (bucket[i][0] === key){
        val = bucket[i][1];
        delete bucket[i];
        this._size--;
      }
    }   
  }


  if (this._size <= 0.25 * this._max){
    this.resize(0.5 * this._max);
  }
  return val;
};

HashTable.prototype.resize = function(newSize){
  var old = this._storage.reduce(function(m,v){
    if (v !== undefined){
      v.reduce(function(m2,v2){
        m2.push([v2[0],v2[1]]);
        return m2;
      },m);
    }
    return m;
  },[]);
  this._max = newSize;
  this._storage = [];
  this._size = 0;
  var that = this;

  return old.reduce(function(m,v){
    that.insert(v[0],v[1]);
    return m;
  },this._storage);
};


var makeHash = function(key,max){
  var hash = 0;
  for (var i = 0; i<key.length; i++){
    hash = (hash<<5) + hash + key.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max
}

