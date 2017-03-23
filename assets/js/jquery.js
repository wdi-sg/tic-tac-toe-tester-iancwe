$(document).ready(function () {
  // alert('jquery is up!')

  function nextplayer (player) {
    if (player == 1) {
      return player = 2
    } else {
      return player = 1
    }
  }

  function crossCircle (player) {
    if (player == 1) {
      return 'cross'
    } else {
      return 'circle'
    }
  }
  $('.box').click(function () {
    console.log('box has been clicked')
    var boxChos = $(this)
    if (turn === true) {
      if (player === 1) {
        boxChos.text('X')
      } else {
        boxChos.text('O')
      }
    }
  })
})
