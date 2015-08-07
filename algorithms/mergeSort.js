var merge = function (left,right){
  var il = 0;
  var ir = 0;
  var results = [];

  while (il < left.length && ir < right.length){
    if (left[il] < right[ir]){
      results.push(left[il++]);
    } else {
      results.push(right[ir++]);
    }
  }

  return results.concat(left.slice(il)).concat(right.slice(ir));
};

// Recursively
var mergeSort1 = function (array){
  var middle = Math.floor(array.length/2);
  var left = array.slice(0,middle);
  var right = array.slice(middle);

  if (array.length === 1){
    return array;
  }

  return merge(mergeSort(left), mergeSort(right));
  };

// Iteratively
var mergeSort2 = function (array){
  array = array.map(function(item){return [item]});
  //now we have an array of n length with n items, and we will
  //begin to build upwards and combine them one by one.

  while (array.length > 1){
    for (var i = 0; i < array.length; i++){
      if (array[i+1]){
        array[i] = merge(array[i], array[i+1]);
        array.splice(i+1,1);
      }
    }
  }
  return array[0];
};