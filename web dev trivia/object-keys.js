
var a = {};
var b = {prop: 'b'};
var c = {prop: 'c'};
var d = {prop: 'd'};

a[b] = 'foo';
a[c] = 'bar';
a[d] = 'baz';

console.log(a[c]);
// logs baz

// when represented in an object, setting an object as a property sets it to
// a {
//  '[object Object]' : ...
// }

// so in this case, all we are doing is setting that same string over and over again. what the
// actual variables themselves point to is meaningless because all keys are stringies, and
// setting the key of any string from a variable will stringify that variable.
