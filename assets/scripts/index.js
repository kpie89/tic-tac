'use strict';

console.log('loaded index.js');

// require('./example');
const ajax = require('./ajax.js');

// load sass manifest
require('../styles/index.scss');

$(document).ready(() => {
  console.log('It works.');
});

// global variables //
let currentPlayer = 'X';
let turnCount = 0;
let playerWon = false;
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

// reset board //
let resetBoard = function() {
  $('#board').find('td').text('');
  turnCount = 0;
  board = ['', '', '', '', '', '', '', '', ''];
  ajax.ajaxCreateGame();
  ajax.getGames();
};

// change player //
let changePlayer = function() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  $('#turn').text(currentPlayer + 's turn!');
  console.log(turnCount);
  console.log(xWins);
};


// update scoreboard //
let updateScoreboard = function() {
  if (currentPlayer === 'X' && playerWon === true) {
    xWins++;
    console.log(xWins);
    $('#x-won').text('X-victories: ' + xWins);
  } else if (currentPlayer === 'O' && playerWon === true) {
    oWins++;
    console.log(oWins);
    $('#o-won').text('O-victories: ' + oWins);
  }
};

// get winner //
let getWinner = function(currentPlayer) {
  for (let i = 0; i < winning.length; i++) {
    let newArray = winning[i];
    if (board[newArray[0]] === currentPlayer && board[newArray[1]] === currentPlayer && board[newArray[2]] === currentPlayer) {
      playerWon = true;
      $('#victory').html(currentPlayer + ' WINS').show();
      updateScoreboard(currentPlayer);

}

    }
};

// play game //
let playGame = function() {
  $('#board').find('td').on('click', function() {
    $('#victory').html(currentPlayer + ' WINS').hide();
    if (playerWon === true) {
      resetBoard();
      playerWon = false;
    }
    $(this).text(currentPlayer);
    board[event.target.id] = currentPlayer;
    turnCount++;
    if (turnCount >= 9 && playerWon === false) {
      playerWon = false;
      $('#victory').html('Its a tie!').show();
      resetBoard();
    }
    getWinner(currentPlayer);
    console.log(playerWon);
    changePlayer(currentPlayer);
    ajax.updateGame(currentPlayer, event.target.id);
  });
};

playGame();

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
