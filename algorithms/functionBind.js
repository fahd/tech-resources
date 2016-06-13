/*
Create a function that binds to a specific context, in this case as a free-function invocation

Ex 1:
 var alice = {
  name: 'alice',
  shout: function(){
    alert(this.name);
  }
}

var boundShout = bind(alice.shout, alice);
boundShout(); // alerts 'alice'
boundShout = bind(alice.shout, {name: 'bob'});
boundShout(); // alerts 'bob'

Ex. 2:
var func = function(a, b){ return a + b };
var boundFunc = bind(func, null, 'foo');
var result = boundFunc('bar');
result === 'foobar'; // true

*/


var bind = function (){
  
};



/*
Same thing, but as a method on the Function object's prototype
Function.prototype.bind:

example 1:
var alice = {
  name: 'alice',
  shout: function(){
    alert(this.name);
  }
}
var boundShout = alice.shout.bind(alice);
boundShout(); // alerts 'alice'
boundShout = alice.shout.bind({name: 'bob'});
boundShout(); // alerts 'bob'
example 2:
var func = function(a, b){ return a + b };
var boundFunc = func.bind(null, 'foo');
var result = boundFunc('bar');
result === 'foobar'; // true
*/

Function.prototype.bind = function (){

};