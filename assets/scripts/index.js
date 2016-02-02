'use strict';
// let playGame = function() {
// let currentPlayer = 'X';
//let squares = $('.sq');
let turnCount = 0;
 // let xWins = 0;
 // let oWins = 0;
const board = ['','','','','','','','',''];
let winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

let getWinner = function() {
  if (winning[0][0] === ['X', 'X', 'X']) {
    console.log(winning);
    window.alert('winner is x');
  return 'winner is x';
}
};
$(document).ready(function () {
      $('#board').find('td').click(function (){
        if (turnCount % 2 === 0){
          $(this).text('X');
          board[event.target.id] = 'X';
            } else {
          $(this).text('O');
          board[event.target.id] = 'O';
    }
    getWinner();
    console.log(board);
          turnCount++;
          if (turnCount >= 9) {
            window.alert("Cats game. Please play again.");
          }
    });
});




$('#playAgain').on('click', function(){
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
