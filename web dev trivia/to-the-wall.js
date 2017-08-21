if ("a" in window) {
  var a = 21;
}

console.log(a);

// checks to see if the string is a property of the latter
// this if clause shows up as true because line 2 creates a global, albeit undefined, value for a via hoisting,
// since if blocks are not block scoped. if it it was a 'let', then we would throw an exception on line 5 
// when we try to log a.
