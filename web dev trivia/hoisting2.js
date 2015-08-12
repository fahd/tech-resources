function foo(){

  function bar() {
      return 3;
  }
  return bar();
  function bar() {
      return 8;
  }
}

console.log(foo());

// HOISTED VERSION

var foo;
foo = function (){
  var bar;
  bar = function(){
    return 3;
  }
  bar = function(){
    return 8;
  }
  return bar();
}
console.log(foo());
// log 8