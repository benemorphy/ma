Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    //post._id = Posts.insert(post);
    Meteor.call('postInsert', post, function(error, result) {
      // 显示错误信息并退出
      if (error)
        return alert(error.reason);
if (result.postExists)
       return alert('This link has already been posted');
      Router.go('postPage', {_id: result._id});
    });
    //Router.go('postPage', post);
  }
});