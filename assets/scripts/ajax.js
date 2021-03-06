'use strict';

console.log('loaded ajax.js');

const myApp = {
  BASE_URL: 'http://tic-tac-toe.wdibos.com',
};

let ajaxCreateGame = function() {
  console.log(myApp.user);
  if (!myApp.user) {
    console.error('Wrong!');
    return;
  }
  $.ajax({
      url: myApp.BASE_URL + '/games/',
      method: 'POST',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      data: {}
    })
    .done(function(data) {
      myApp.game = data.game;
      console.log(data);
    })
    .fail(function(jqxhr) {
      console.error(jqxhr);
    });
};

let getGames = function() {
  if (!myApp.user) {
    console.error('Wrong!');
    return;
  }
  $.ajax({
    url: myApp.BASE_URL + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + myApp.user.token,
    },
    data: {}
  }).done(function(data) {
    myApp.games = data.games;
   $('#total-games').html('Total games: ' + myApp.games.length);
   console.log(data.games.length);
    console.log(myApp.games);
  })
  .fail(function(jqxhr) {
    console.error(jqxhr);
  });
};

$(document).ready(() => {
  $('#sign-up').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.BASE_URL + '/sign-up',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log(data);
      $('#sign-up-modal').modal('hide');
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });





  $('#sign-in').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.BASE_URL + '/sign-in',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      myApp.user = data.user;
      console.log(data);
      $('#sign-in-modal').modal('hide');
      ajaxCreateGame();
      getGames();
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

  $('#change-password').on('submit', function(e) {
    e.preventDefault();
    if (!myApp.user) {
      console.error('Wrong!');
      return;
    }


    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.BASE_URL + '/change-password/' + myApp.user.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log(data);
      $('#change-password-modal').modal('hide');
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });

  $('#sign-out-button').on('click', function(e) {
    e.preventDefault();
    if (!myApp.user) {
      console.error('Wrong!');
      return;
    }

    $.ajax({
      url: myApp.BASE_URL + '/sign-out/' + myApp.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
    }).done(function() { 
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
});

let updateGame = function(currentPlayer, index) {
  $.ajax({
      url: myApp.BASE_URL + '/games/' + myApp.game.id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      data: {
        "game": {
          "cell": {
            "index": index,
            "value": currentPlayer
          },
          "over": false
        }
      }
    }).done(function(data) {
      myApp.game = data.game;
      console.log(myApp.game);
    })
    .fail(function(jqxhr) {
      console.error(jqxhr);
    });
};

module.exports = {
  updateGame,
  getGames,
  ajaxCreateGame,
};
