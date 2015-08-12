console.log('a');
setTimeout(function() { console.log('foo'); }, 1000);
setTimeout(function() { console.log('bar'); }, 0);
setTimeout(function() { console.log('baz'); }, 1000);
console.log('b');

// logs a, b, bar, foo, baz

// the setTimeouts will be loaded onto the event table. the main thread will run to completion,
// and bar will be loaded onto the event queue first since it's minimum time to execute is the least.
// this is followed by foo, since even though foo and bave the same time to wait, foo has already
// started the countdown when baz has been loaded. Finally, baz will be run as the last item loaded
// onto the event queue

