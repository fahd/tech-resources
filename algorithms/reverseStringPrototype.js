
// Given that the native reverse method has disappeared, reverse a string
// by mutating only the original input by defining a method on the Array prototype
Array.prototype.reverse = function() {
  for(var i = 0, j = this.length-1; i < j; i++, j--) {
    var tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
  return this;
};