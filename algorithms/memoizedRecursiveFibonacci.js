var recur = function (cb){
  var storage = {};
  return function(n){
    if (storage[n] === undefined) storage[n] = cb(n);
    return storage[n];
  }
}

var fibonacci = recur(
function fib(n){
  if (n < 2){
    return n;
  } else {
    return fibonacci (n-1) + fibonacci (n-2);
  }
});


