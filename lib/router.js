Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'home'});
Router.route('/demo', {name: 'demo'});
Router.route('/userguide', {name: 'userguide'});
Router.route('/contactus', {name: 'contactus'});
Router.route('/meetingroom/:username', {
	name: 'meetingroom',
	//data: function() { 
	//	console.log (this.params.username);
	//	return Scenes.findOne(this.params._id);
//
	//	 }
	//,console.log(data)
waitOn: function() {

return Meteor.subscribe("room_roomname",this.params.username);
}
});


