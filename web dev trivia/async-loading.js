web-dev-trivia
// My answers to this repo. https://github.com/arosenberg01/web-dev-trivia

// ********* Question 1.
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}

// Q. How would you modify this to create the expected/intuitive functionality?

// A. The problem here is that given JavaScript's single-threaded nature, the event loop
// only handles one thread at a time. One thread == one call-stack, so with every loop, we are
// incrementing i, but queueing a series of callbacks with a waiting period in an area known as the // event table (think of it as the registration booth for our callbacks). Once the prerequisite
// amount of time has passed for the callback in the event table, it is moved to our event queue.
// Our event queue checks our call stack and sees if there is any code that is being run, or if
// there are currently more calls that will be made. If there are, the call stack will be run to
// completion, and the first callback in the event queue will be placed onto the call-stack, and
// will run to completion.

// In this case, the for-loop will run to completion, incrementing i a total of 5 times to give a
// final value of 4. This for-loop is blocking, while JavaScript asynchronously handles the loading
// of the functions onto the event table, and later the event queue. When our for-loop is
// completed, our functions will each register onto the call-stack, one at a time, until each
// individual one is run to completion. However, they each log 5.


// Solution - Maintain proper lexical scoping with the function being queued and maintain its accessibilility to i at each interval of the loop.

function logNumber (i){
  setTimeout(function(){
      console.log(i);
  },i*1000)
}

for (var i = 0; i < 5; i++){
  logNumber(i);
}

// OR

for (var i = 0; i < 5; i++){
  (function(i){
    setTimeout(function(){
      console.log(i);
    },i * 1000)
  })(i);
}


