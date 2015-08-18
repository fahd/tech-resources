/**
 *
 *  A robot located at the top left corner of a 5x5 grid is trying to reach the
 *  bottom right corner. The robot can move either up, down, left, or right,
 *  but cannot visit the same spot twice. How many possible unique paths are
 *  there to the bottom right corner?
 *
 *  make your solution work for a grid of any size.
 *
 */

// A Board class will be useful

var makeBoard = function(n) {
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(false);
    }
  }
  board.togglePiece = function(i, j) {
    this[i][j] = !this[i][j];
  }
  return board;
};

var robotPaths = function(n) {
  // make a board of size n, which is an array of n arrays with n false elements in each array
  var board = makeBoard(n);
  var i = 0, j = 0, count = 0;
  // number of possible solutions that we can have
  var count = 0;
var traverse = function (board,i,j){
    if (i === n-1 && j === n-1){
      // toggle the piece so that it can be untoggled in other paths
      board.togglePiece(i,j);
      count++;
      return;
    }
    board.togglePiece(i,j);
    // our recursive function will reset the toggled piece to be used in other paths
    if (j+1 < n && board[i][j+1] === false){
      traverse(board,i,j+1);
      board.togglePiece(i,j+1)
    }
    if (i+1 < n && board[i+1][j] === false){
      traverse(board,i+1,j);
      board.togglePiece(i+1,j)
    }
    if (j-1 > -1 && board[i][j-1] === false){
      traverse(board,i,j-1);
      board.togglePiece(i,j-1)
    }
    if (i-1 > -1 && board[i-1][j] === false){
      traverse(board, i-1, j);
      board.togglePiece(i-1,j)
    }
    // if we've exhausted a path, break out of the current recursive call and jump back up
    // the call stack
    return;
};
  traverse(board,i,j);
  return count;
};

console.log(robotPaths(3));