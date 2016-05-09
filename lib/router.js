Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'header'});
// Router.route('/submit', {name: 'postSubmit'});

//Router.route('/posts/:_id/edit', {
//  name: 'postEdit',
//  waitOn: function() { 
//    return Meteor.subscribe('singlePost', this.params._id);
//  },
//  data: function() { return Posts.findOne(this.params._id); }
//});
