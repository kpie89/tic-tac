'use strict';

    $(document).ready(function(){
        var turnCount=0;

          $('#board').find('td').on('click', function(){
                if (turnCount % 2 === 0){
                  $(this).text('X');

                } else {
               //player 2's turn (O)
                  $(this).text('O');

                }
              turnCount++;
    });
    $('#newGame').on('click',function(){
        $('.square').text('');
    });
});

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
require('./assets/scripts/index.js');
require('./assets/styles/index.scss');

// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');
