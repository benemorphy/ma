Meteor.publish("allscenes",function(){
return Scenes.find();	
})
Meteor.publish("romm_scenes",function(meetingroom){
return Scenes.find({"meetingroom":meetingroom});	
})