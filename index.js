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
  baseUrl: 'http://tic-tac-toe.wdibos.com',
};
$(document).ready(() => {
  $('#sign-up').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.baseUrl + '/sign-up',
      // url: 'http://httpbin.org/post',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
});

$(document).ready(() => {
  $('#sign-in').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.baseUrl + '/sign-in',
      // url: 'http://httpbin.org/post',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      myApp.user = data.user;
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
});

$(document).ready(() => {
  $('#change-password').on('submit', function(e) {
    e.preventDefault();

    if (!myApp.user) {
      console.error('Wrong!');
      return;
    }


    var formData = new FormData(e.target);
    $.ajax({
      url: myApp.baseUrl + '/change-password/' + myApp.user.id,
      // url: 'http://httpbin.org/post',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
});

$(document).ready(() => {
  $('#sign-out-button').on('submit', function(e) {
    e.preventDefault();
    console.log(myApp.user);
    if (!myApp.user) {
      console.error('Wrong!');
      return;
    }

    $.ajax({
      url: myApp.baseUrl + '/sign-out/' + myApp.user.id,
      // url: 'http://httpbin.org/post',
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + myApp.user.token,
      },
      contentType: false,
      processData: false,
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
});
