var num = 1;
var name = 'Superman';
var obj = {
  val: 'first'
}

function alter(num, name, obj) {
  num += 9;
  name = 'Batman';
  obj.val = 'second'
}

alter(num, name, obj);

console.log(num);
// 1
console.log('The best superhero:', name);
// Superman
console.log(obj.val);
// second

// num and name in the function are relative to the scope of the function.
// we create new num and name values and when passed in our variables and only modify them
// within that scope, and any changes that happen to our passed in arguments are actually
// changes that are happening within the scope of the function, to those arguments.
// however, since obj.val refers to passing somethng by reference, we'll
// actually refer to the value of the already-existing object.
