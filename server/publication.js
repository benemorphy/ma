Meteor.publish("allScenes",function(){
return Scenes.find();	
})