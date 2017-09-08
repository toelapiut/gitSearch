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
                <div class="col-md-8 col-md-8">
                   <div class='userInformation'>
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
                <div>
             `);
            });
          });
          $('#profile').html(`
            <div class="col-md-4 col-sm-4" ">
            <div class="row">
               <div class="col-md-3" ">
                 <div id="i">
                   <img class="img-responsive" src="${response.avatar_url}" alt="user-image" title="${response.name}">
                 </div>
                 <hr>
                 </div>
                </div>
           `)
        }
        exports.UserProfileModule = UserProfile;
