/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.
// Introduce i into the global scope so we can test function efficiency


var i;
//we are given an array, and we want to output the same array.
//therefore, we do not want to mutate anything.

//cases
  //array is sorted entirely, so it would be O(n) given that we're just iterating over the array
  //array is entirely unsorted, so it would be a function of the input size, and would be O(n)^n, dependent
    //upon how many items there are in the list

//loop through the array, and compare the current value to the one that comes before it (in order to circumvent
//the situation where the last item isn't compared to something that doesn't exist. This shouldn't be a problem
//anyways)

//if the one that comes before it is greater than the current element, store the current element in a temporary variable
//set the current element to the one before
//set the element before the current element to be the temporary element.
//continue until the end of the array

//say we had [1,4,2,6,3]
//first iteration -> [1,2,4,3,6]



var swap = function (array, current, next){
  var temp = array[current];
  array[current] = array[next];
  array[next] = temp;
}

var bubbleSort = function (array){
  var isSwapped = false;
  for (var i = 0; i < array.length; i++){
    if (array[i] > array[i+1]){
      swap(array, i, i+1);
      isSwapped = true;
    }
  }
  return isSwapped ? bubbleSort(array) : array;
};







