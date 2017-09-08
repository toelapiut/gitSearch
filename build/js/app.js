(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey='9b5d37c1c69fe72592eb9360a2c69fabf9eeaf0a';

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

UserProfile = function() {};

UserProfile.prototype.getProfile = function(userInput) {
  $.get('https://api.github.com/users/' + userInput + '?access_token=' + apiKey).then(function(response) {

    $.ajax('https://api.github.com/users/' + userInput + '/repos').then(function(repository) {

    }).then(function(repository) {
      $.each(repos, function(index, repository) {
        console.log(repository);
        $('#repos').append(`
                    <div class='well'>
                        <div class='row'>
                            <div class='col-md-7'>
                                <strong>${repository.name}<strong>: ${repository.description}
                            </div>
                            <div class='col-md-3'>
                                <span class="label label-default">Forks: ${repository.forks_count}</span>
                                <span class="label label-primary">Watchers: ${repository.watchers_count}</span>
                                <span class="label label-success">Stars: ${repository.stargazers_count}</span>
                            </div>
                            <div class='col-md-2'>
                            <a href='${repository.html_url}' target='_blank' class='btn btn-default'>Repo Page</a>
                            </div>
                        </div>
                    </div>
                    `);
      });
    });
    $('#profile').html(`
      <div class="row">
        <div class="col-md-3" id="user-image">
          <div id="img-border">
            <img class="img-responsive" src="${response.avatar_url}" alt="user-image" title="${response.name}">
          </div>
          <hr>
          <h4>User Bio</h4>
          <p>${response.bio}<p>
          <hr>
          <span class="label label-primary">Followers ${response.followers}</span>
          <span class="label label-primary">Following ${response.following}</span>
          <hr>
          <span class="label label-success">Created at: ${response.created_at}</span>
        </div>
        <div class="col-md-6">
          <h3>User Details</h3>
          <hr>
          <div class="well">
            <ul class="list-group">
              <li class="list-group-item"><h5>Name:</h5>${response.name}</li>
              <li class="list-group-item"><h5>Email:</h5> ${response.email}</li>
              <li class="list-group-item"><h5>Location:</h5> ${response.location}</li>
              <li class="list-group-item"><h5>Hireable:</h5> ${response.hireable}</li>
            </ul>
          </div>
        </div>
      </div>
        `);
  }).fail(function(error) {

  });
};
exports.UserProfileModule = UserProfile;

},{"./../.env":1}],3:[function(require,module,exports){
var UserProfile = require('./../js/gitsearch.js').UserProfileModule;

$(document).ready(function() {
  $('#search').on('keyup', function(event) {
    console.log(event.target.value);
    userInput = event.target.value;
    var userGit = new UserProfile();
    userGit.getProfile(userInput);

  });
});

},{"./../js/gitsearch.js":2}]},{},[3]);
