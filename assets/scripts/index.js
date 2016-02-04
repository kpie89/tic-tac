'use strict';

// let playGame = function() {
let currentPlayer = 'X';
let turnCount = 0;

let xWins = 0;
let oWins = 0;
let board = ['', '', '', '', '', '', '', '', ''];
let winning = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6],
];

let resetBoard = function() {
  $('#board').find('td').text('');
  turnCount = 0;
  board = ['', '', '', '', '', '', '', '', ''];
};

let changePlayer = function() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
};

let updateScoreboard = function(player) {
  if (player === 'X') {
    xWins++;
    $('#x-wins').html('X-victories ' + xWins).show();
  } else {
    oWins++;
    $('#o-wins').html('O-victories ' + oWins).show();
  }
};

let getWinner = function(player) {
  console.log(board);
  for (let i = 0; i < winning.length; i++) {
    let newArray = winning[i];
    if (board[newArray[0]] === player && board[newArray[1]] === player && board[newArray[2]] === player) {
      $('.victory').html(player + 'WINS!').show();

      updateScoreboard();
      resetBoard();
    }
  }
};

$(document).ready(function() {
  $('#board').find('td').click(function() {
    $(this).text(currentPlayer);
    board[event.target.id] = currentPlayer;
    $(this).text(currentPlayer);
    board[event.target.id] = currentPlayer;
    turnCount++;
    getWinner(currentPlayer);
    changePlayer();
    if (turnCount >= 9) {
      $('.victory').html('Its a tie!').show();
      resetBoard();
    }
  });
});

// $(document).ready(function() {
//  playGame();
// });
// };

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');

$(document).ready(() => {
  console.log('It works.');
});
