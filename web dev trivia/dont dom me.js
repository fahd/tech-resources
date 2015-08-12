var allDivs = document.getElementsByTagName('div');
var body = document.getElementsByTagName('body')[0];

for (var i = 0; i < allDivs.length; i++) {
  var newDiv = document.createElement('div');
  body.appendChild(newDiv);
}

// Q. What happens?
// A. As I look through the code, my intuition tells me that as we are looping to
// a max of the prepopulated div list length, we are creating divs and appending them to the body.
// However, there is a catch. allDivs is passing the an array of div's by reference, such that
// whenever we append a div to the body, we are actually changing the length of allDivs. By mutating
// allDivs, we are stuck in an infinite loop.