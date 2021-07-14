document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

  for (var i = 0, len = squares.length; i < len; i++)

    (function (index) {
      squares[i].onclick = function () {
        if (squares[index + 7].classList.contains('taken')) {
          if (currentPlayer === 1) {
            squares[index].classList.add('taken')
            squares[index].classList.add('player-one')
            currentPlayer = 2
            displayCurrentPlayer.innerHTML = currentPlayer
          } else if (currentPlayer === 2) {
            squares[index].classList.add('taken')
            squares[index].classList.add('player-two')
            currentPlayer = 1
            displayCurrentPlayer.innerHTML = currentPlayer
          }
        } else alert('cant go here')
      }
    })(i)

  function checkBoard() {
    const winningArray = [
      [0, 1, 2, 3],
      [0, 7, 14, 21],
      [0, 8, 16, 24],
      [1, 2, 3, 4],
      [1, 8, 15, 22],
      [1, 9, 17, 25],
      [2, 9, 16, 23],
      [2, 10, 18, 26],
      [3, 10, 17, 24],
      [4, 10, 16, 22],
      [4, 11, 18, 25],
      [5, 4, 3, 2],
      [5, 11, 17, 23],
      [5, 12, 19, 26],
      [6, 5, 4, 3],
      [6, 12, 18, 24],
      [6, 13, 20, 27],
      [7, 8, 9, 10],
      [7, 14, 21, 28],
      [7, 15, 23, 31],
      [8, 9, 10, 11],
      [8, 15, 22, 29],
      [8, 16, 24, 32],
      [9, 16, 23, 30],
      [9, 17, 25, 33],
      [10, 17, 24, 31],
      [11, 17, 23, 29],
      [11, 18, 25, 32],
      [12, 11, 10, 9],
      [12, 18, 24, 30],
      [12, 19, 26, 33],
      [13, 12, 11, 10],
      [13, 19, 25, 31],
      [13, 20, 27, 34],
      [14, 15, 16, 17],
      [14, 22, 30, 38],
      [15, 16, 17, 18],
      [19, 18, 17, 16],
      [20, 19, 18, 17],
      [20, 26, 32, 38],
      [21, 15, 9, 3],
      [21, 22, 23, 24],
      [22, 23, 24, 25],
      [26, 25, 24, 23],
      [27, 19, 11, 3],
      [27, 26, 25, 24],
      [28, 22, 16, 10],
      [28, 29, 30, 31],
      [29, 30, 31, 32],
      [33, 32, 31, 30],
      [34, 26, 18, 10],
      [34, 33, 32, 31],
      [35, 28, 21, 14],
      [35, 29, 23, 17],
      [35, 36, 37, 38],
      [36, 29, 22, 15],
      [36, 30, 24, 18],
      [36, 37, 38, 39],
      [37, 30, 23, 16],
      [37, 31, 25, 19],
      [38, 31, 24, 17],
      [39, 31, 23, 15],
      [39, 32, 25, 18],
      [40, 32, 24, 16],
      [40, 33, 26, 19],
      [41, 33, 25, 17],
      [41, 34, 27, 20],
      [40, 39, 38, 37],
      [41, 40, 39, 38],
    ]
    for (let y = 0; y < winningArray.length; y++) {
      const square1 = squares[winningArray[y][0]]
      const square2 = squares[winningArray[y][1]]
      const square3 = squares[winningArray[y][2]]
      const square4 = squares[winningArray[y][3]]

      if (square1.classList.contains('player-one') && square2.classList.contains('player-one') && square3.classList.contains('player-one') && square4.classList.contains('player-one')) {
        result.innerHTML = 'PLayer One Wins!'
      }

      else if (square1.classList.contains('player-two') && square2.classList.contains('player-two') && square3.classList.contains('player-two') && square4.classList.contains('player-two')) {
        result.innerHTML = 'Player Two Wins!'
      }
    }
  }

  squares.forEach(square => square.addEventListener('click', checkBoard))
})