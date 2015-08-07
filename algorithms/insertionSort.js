// first method
var insertionSort = function (array){
  for (var i = 1; i<array.length;i++){
    var value = array[i];
    var idx = i;
    while (idx > 0 && val < array[i-1]){
      array[i] = array[i-1];
      idx--;
    }
    array[idx] = value;
  }
};

// second method
var insertionSort2 = function (array){
  var current, i, j;

  for (i = 0; i < array.length){
    temp = array[i];
      for (j = i - 1; j > 0 && array[j]>temp; j--){
        array[j+1] = array[j];
      }
      array[j+1] = temp;
    }

    return array;
}