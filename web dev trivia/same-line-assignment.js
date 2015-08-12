(function() {
  var foo = bar = 3;
})()

console.log(bar);
console.log(foo);

/*
Can you break down line 2 into line by line assignment?
*/
// assignment happens right to left