// where you write your js codes
var board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var moves=[]
var player = 1

function restart () {
  board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  player = 1
}

function isGameOver () {
  if (whoWon()) return true
  return false
}
// still trying to figure out how to to check if player 1 or player 2 won.
function whoWon () {
  return 0
  // if ((board[0] === board[1]) && (board[1] === board[2]) && (board[0] !== undefined)) {
  //   return true
  // } else if ((board[3] === board[4]) && (board[4] === board[5]) && (board[3] !== undefined)) {
  //   return true
  // } else if ((board[6] === board[7]) && (board[7] === board[8]) && (board[6] !== undefined)) {
  //   return true
  // } else if ((board[0] === board[3]) && (board[3] === board[6]) && (board[0] !== undefined)) {
  //   return true
  // } else if ((board[1] === board[4]) && (board[4] === board[7]) && (board[1] !== undefined)) {
  //   return true
  // } else if ((board[2] === board[5]) && (board[5] === board[8]) && (board[2] !== undefined)) {
  //   return true
  // } else if ((board[0] === board[4]) && (board[4] === board[8]) && (board[0] !== undefined)) {
  //   return true
  // } else if ((board[2] === board[4]) && (board[4] === board[6]) && (board[2] !== undefined)) {
  //   return true
  // } else if ((board[0] !== undefined) && (board[1] !== undefined) && (board[2] !== undefined)
  //           && (board[3] !== undefined) && (board[4] !== undefined) && (board[5] !== undefined)
  //           && (board[6] !== undefined) && (board[7] !== undefined) && (board[8] !== undefined)) {
  //   player = 3
  //   return true
  // } else {
  //   return false
  // }
}

function playTurn (index) {
  if (board[index] || isGameOver()) {
    return false
  } else {
    if (index === 1) player = 2
    else player = 1
    return true
  }
}
