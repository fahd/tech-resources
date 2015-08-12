var a = 1;

function b() {
    a = 10;
    return;
    function a() {}
}

b();
console.log(a);

// HOISTED VERSION
var a;
var b;

b = function (){
  var a;
  a = function a(){}
  a = 10;
  return;
}
a = 1;
b();
console.log(a);
// logs 1