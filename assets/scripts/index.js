'use strict';
// let playGame = function() {
// let currentPlayer = 'X';
//let squares = $('.sq');
let turnCount = 0;
// let xWins = 0;
// let oWins = 0;
const board = ['', '', '', '', '', '', '', '', ''];
let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let getWinner = function() {
   for (let i = 0; i < winning.length; i++) {
       let p1 = winning[i][0]; //|| winning[i][3]; //|| winning[i][6] || winning[i][0] || winning[i][1] || winning[i][2] || winning[i][0] || winning[i][2];
       let p2 = winning[i][1]; //|| winning[i][4]; //|| winning[i][7] || winning[i][3] || winning[i][4] || winning[i][5] || winning[i][4] || winning[i][4];
       let p3 = winning[i][2]; //|| winning[i][5]; //|| winning[i][8] || winning[i][6] || winning[i][7] || winning[i][8] || winning[i][8] || winning[i][6];
       if ( (board[p1] === 'X') && ( board[p2] === 'X') && ( board[p3] === 'X') ){
          console.log('winner is X');
       } else if ( (board[p1] === 'O') && ( board[p2] === 'O') && ( board[p3] === 'O') ) {
          console.log('winner is O');
       } break;

  //   for (let j = 0; i < winning[i].length; j++) {
  //  let winner = winning[i][j];
  //    debugger;
  //    if (winner[j] === 'X') {
  //      debugger;
  //    console.log('winner');
  //   return 'winner';
  //    }
  //  }
   }
  //console.log('winner');
  //return;
};


$(document).ready(function() {
  $('#board').find('td').click(function() {
    if (turnCount % 2 === 0) {
      $(this).text('X');
      board[event.target.id] = 'X';
    } else {
      $(this).text('O');
      board[event.target.id] = 'O';
    }
    console.log(board);
    turnCount++;
    getWinner();
    if (turnCount >= 9) {
      window.alert("Cats game. Please play again.");
    }
  });
});




$('#playAgain').on('click', function() {
  $('.sq').text('');
});
// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

// load sass manifest
require('../styles/index.scss');

$(document).ready(() => {
  console.log('It works.');
});
