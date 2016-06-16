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
var requireCorrectLoginName=function(){
	if (!Meteor.user()){
		this.render('accessDenied');
	} else {
		if (Meteor.user().username===this.params.username) {

			this.next();
		} 
		else{
			this.render('wrongUsername');
			
		};
		
		
	}
};

Router.onBeforeAction(requireLogin,{only:'gotomeetingroom'});
Router.onBeforeAction(requireCorrectLoginName,{only:'meetingroom'});
