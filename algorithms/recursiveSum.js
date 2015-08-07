var recursiveSum1 = function(n,rounds,sum){
  if (n[rounds]){
    sum += +n[rounds];
    rounds--;
  }
  if (rounds < 0){
    return sum;
  }
  var numString = n + '';
  rounds = rounds >= 0 ? rounds : (numString.length)-1;
  sum = sum || 0;
  return recursiveSum(numString, rounds, sum);
};


var recursiveSum2 = function (num){
  var numToString = num + '';
  var next = numToString.slice(1);
  var sum = +numToString[0]

  if (next){
    sum += recursiveSum(+next)
  }

  return sum;
};