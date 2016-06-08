Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/demo', {name: 'demo'});
Router.route('/userguide', {name: 'userguide'});
Router.route('/contactus', {name: 'contactus'});
Router.route('/meetingroom/:username', {
	name: 'meetingroom',	
waitOn: function() {

return Meteor.subscribe("room_roomname",this.params.username);
}
});


