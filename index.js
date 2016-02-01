'use strict';

    $(document).ready(function(){
        let turnCount=0;

          $('#board').find('td').on('click', function(){
                if (turnCount % 2 === 0){
                  $(this).text('X');
                } else {
                  $(this).text('O');
                }
              turnCount++;
    });

    $('#playAgain').on('click',function(){
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
