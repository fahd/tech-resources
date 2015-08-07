/*
Using the JavaScript language, have the function Division(num1,num2) take both
parameters being passed and return the Greatest Common Factor. That is, return
the greatest number that evenly goes into both numbers with no remainder.
For example:
12 and 16 both are divisible by 1, 2, and 4 so the output should be 4.
The range for both parameters will be from 1 to 10^3.
*/


  var gcfIterative = function (first, second){
    var gcf = 1;
    var larger = first > second ? first : second;
    var smaller = first > second ? second : first;

    for (var i = 1; i < smaller; i++){
      var divisor = smaller/i;
      if (larger % divisor === 0){
        return divisor;
      }
    }
    return gcf;
  };

//recursive solution
  var gcfRecursive = function (first, second){
    if (second){
      return gcf(second, first % second)
    } else {
      return Math.abs(first);
    }
  }