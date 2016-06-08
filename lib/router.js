Router.configure({
  layoutTemplate: 'layout'

});

Router.route('/', {name: 'home'});
Router.route('/demo', {name: 'demo'});
Router.route('/userguide', {name: 'userguide'});
Router.route('/contactus', {name: 'contactus'});
Router.route('/gotomeetingroom',{name: 'gotomeetingroom'});
Router.route('/meetingroom/:username', {
	name: 'meetingroom',	

waitOn: function() {

return Meteor.subscribe("room_roomname",this.params.username);
}
});


var requireLogin=function(){
	if (!Meteor.user()){
		this.render('accessDenied');
	} else {
		this.next();
	}
};

Router.onBeforeAction(requireLogin,{only:'gotomeetingroom'});
Router.onBeforeAction(requireLogin,{only:'meetingroom'});
