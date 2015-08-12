var foo = 1;

function bar() {
  if (!foo) {
    var foo = 10;
  }
  console.log(foo);
}

bar();

// HOISTED VERSION

var foo;
var bar;
bar = function(){
  var foo;
  if (!foo){
    foo = 10;
  }
  console.log(foo);
}
foo = 1;
bar();
// logs 10 since the "foo" in bar's body is a new variable independent
// of the global scope. since JavaScript doesn't allow block scoping with if-statements, the
// var foo declaration gets hoisted to the top of bar's function declaration. if there was no
// var foo, the foo would refer to the global scope's foo.