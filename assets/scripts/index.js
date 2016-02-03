'use strict';
// let playGame = function() {
let currentPlayer = 'X';
//let squares = $('.sq');
let turnCount = 0;
// let xWins = 0;
// let oWins = 0;
let board = ['', '', '', '', '', '', '', '', ''];
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

let resetBoard = function(){
   $('#board').find('td').text('');
   turnCount = 0;
   board = ['','','','','','','','',''];
 };

let changePlayer = function(){
   currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
 };

let getWinner = function(player) {
  console.log(board);
for (let i = 0; i < winning.length; i++) {
  //console.log(winning.length);
  //console.log(winning[i]);
  let newArray = winning[i];
  if (board[newArray[0]] === player && board[newArray[1]] === player && board[newArray[2]] === player){
    console.log(player + 'wins');
    window.alert(player + ' wins!');
    resetBoard();
  }
//  for (let j = 0; j < newArray.length; j++) {
//    debugger;
//    console.log(newArray.length);
//    console.log(newArray[j]);
//    debugger;
    //  console.log('winner is x');
  }
// } return;
};
//let p1 = winning[i][0]; //  || winning[1][3] || winning[2][6] || winning[3][0] || winning[4][1] || winning[5][2] || winning[6][0] || winning[7][2];
//let p2 = winning[i][1]; //  || winning[1][4] || winning[2][7] || winning[3][3] || winning[4][4] || winning[5][5] || winning[6][4] || winning[7][4];
//let p3 = winning[i][2]; //  || winning[1][5] || winning[2][8] || winning[3][6] || winning[4][7] || winning[5][8] || winning[6][8] || winning[7][6];
//if ( (board[p1] === 'X') && ( board[p2] === 'X') && ( board[p3] === 'X') ){
//    console.log('winner is X');
//} else if ( (board[p1] === 'O') && ( board[p2] === 'O') && ( board[p3] === 'O') ) {
//    console.log('winner is O');
// } break;

//   for (let j = 0; i < winning[i].length; j++) {
//  let winner = winning[i][j];
//    debugger;
//    if (winner[j] === 'X') {
//      debugger;
//    console.log('winner');
//   return 'winner';
//    }
//  }
// }
//console.log('winner');
//return;
//};


$(document).ready(function() {
  $('#board').find('td').click(function() {
      $(this).text(currentPlayer);
      board[event.target.id] = currentPlayer;
      $(this).text(currentPlayer);
      board[event.target.id] = currentPlayer;
    // console.log(board);
    turnCount++;
    getWinner(currentPlayer);
    changePlayer();
    if (turnCount >= 9) {
      window.alert("Cats game. Please play again.");
      resetBoard();
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
