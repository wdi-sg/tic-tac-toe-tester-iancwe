$(document).ready(function () {
  alert('jquery is up!')

  var grid = [null, null, null, null, null, null, null, null, null]
  var player = 1
  var buttclick = 0

  function playTurn (index) {
    if (grid[index] || isGameOver()) {
      return false
    } else {
      grid[index] = player
      if (player === 1) player = 2
      else player = 1
      return true
    }
  }

  function isGameOver () {
    if (whoWon()) {
      alert('yah winner!')
      return true
    }
    return false
  }

  function whoWon () {
    if (grid[0] && grid[0] === grid[1] && grid[0] === grid[2]) return grid[0]
    if (grid[3] && grid[3] === grid[4] && grid[3] === grid[5]) return grid[3]
    if (grid[6] && grid[6] === grid[7] && grid[6] === grid[8]) return grid[6]
    if (grid[0] && grid[0] === grid[3] && grid[0] === grid[6]) return grid[0]
    if (grid[1] && grid[1] === grid[4] && grid[1] === grid[7]) return grid[1]
    if (grid[2] && grid[2] === grid[5] && grid[2] === grid[8]) return grid[2]
    if (grid[0] && grid[0] === grid[4] && grid[0] === grid[8]) return grid[0]
    if (grid[2] && grid[2] === grid[4] && grid[2] === grid[6]) return grid[2]
    if (grid[0] && grid[1] && grid[2] && grid[3] && grid[4] &&
    grid[5] && grid[6] && grid[7] && grid[8]) return 3
    return 0
  }

  function restart () {
    grid = [null, null, null, null, null, null, null, null, null]
    player = 1
    $('.box').text(' ')
    buttclick = 0
  }

  $('.box').on('click', function (event) {
    var index = event.target.id
    if (player === 1) {
      $(this).text('X')
    } else { $(this).text('O') }
    playTurn(index)
    buttclick++
    console.log(buttclick)
    if (buttclick === 9) {
      alert('DRAW!')
    } else if (buttclick >= 5) {
      isGameOver()
    }
  })

  $('#button').click(function () {
    restart()
  })
})
