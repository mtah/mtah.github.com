$(document).ready(function() {
  __populate_project_list();
  __init_commit_calendar();
})

function __populate_project_list() {
  var login = 'mtah'
  var target = '#codes'
  $.githubUser(login, function(data) {
    var repos = data.user.repositories

    repos.sort(function(a, b) {
      return a.name > b.name
    })
    
    $(target).html('')
    $(repos).each(function() {
      var homepage_url = this.homepage ? this.homepage : this.url
      var tarball_url = this.url + '/tarball/master'
      var zipball_url = this.url + '/zipball/master'
      var clone_url = 'git://github.com/' + this.owner + '/' + this.name + '.git'
      var content = '<h3><a href="' + homepage_url + '">' + this.name + '<\/a><\/h3>'
      
      if (this.description)
        content += '<p>' + this.description + '<\/p>'
        
      content += '<p><strong>Download: <\/strong> <a href="' + tarball_url + '">.tar.gz<\/a> | <a href="' + zipball_url + '">.zip<\/a><br \/>'
      content += '<strong>Clone URL: <\/strong> <a href="' + clone_url + '">' + clone_url + '<\/a><\/p>'
      $(target).append(content)
    })
  })
}

function __init_commit_calendar() {
  $("html").addClass("js");
  seinfeldBadge();
}
