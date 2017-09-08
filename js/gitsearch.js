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
            <img class="img-responsive" src="${response.avatar_url}" alt="user-image" style=border-radius:50px;'title="${response.name}">
          </div>

          <h4>User Bio</h4>
          <p>${response.bio}<p>

          <span class="label label-primary" >Followers ${response.followers}</span>
          <span class="label label-primary">Following ${response.following}</span>

          <span class="label label-success">Created at: ${response.created_at}</span>
        </div>
        <div class="col-md-6">
          <h3>User Details</h3>

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
