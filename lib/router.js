Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});

Router.route('/meetingroom/:_id', {name: 'meetingroom'//,
	//data: function() { return Posts.findOne(this.params._id); }
});

//Router.route('/posts/:_id/edit', {
//  name: 'postEdit',
//  waitOn: function() { 
//    return Meteor.subscribe('singlePost', this.params._id);
//  },
//  data: function() { return Posts.findOne(this.params._id); }
//});
