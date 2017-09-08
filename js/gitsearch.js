var apiKey = require('./../.env').apiKey;
console.log(userInput);
UserProfile = function() {};

UserProfile.prototype.getProfile = function(userInput) {
  $.get('https://api.github.com/users/' + userInput + '?access_token=' + apiKey).then(function(response) {

    $.ajax('https://api.github.com/users/' + userInput + '/repos').then(function(repository) {
      // here is where the repos and stuff will be hotplate coded
      // here is where the repos and stuff will be hotplate coded
      // here is where the repos and stuff will be hotplate coded
      // here is where the repos and stuff will be hotplate coded
    }).then(function(repository) {
      $.each(repos, function(index, repository) {
        console.log(repository);
        $('#repos').append(`
          `)
      })

  })
}
