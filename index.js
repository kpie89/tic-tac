'use strict';
// load manifests
require('./assets/scripts/index.js');
require('./assets/styles/index.scss');

// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');
const myApp = {
  BASE_URL: 'http://tic-tac-toe.wdibos.com',
};

$(document).ready(() => {
  $('#change-password')
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
      updateGame();
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
      console.log('You have logged out');
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
});


let ajaxCreateGame = function(e) {
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

let updateGame = function(e) {
console.log(myApp.user);
if (!myApp.user) {
  console.error('Wrong!');
  return;
}
$.ajax({
  url: myApp.BASE_URL + '/games/' + myApp.game.id,
  method: 'PATCH',
  headers: {
    Authorization: 'Token token=' + myApp.game.token,
  },
})
.done(function(data) {
  myApp.game = data;
  console.log(myApp.game);
})
.fail(function(jqxhr) {
  console.error(jqxhr);
 });
};
