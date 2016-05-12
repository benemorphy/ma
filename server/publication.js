Meteor.publish("allscenes",function(){
return Scenes.find();	
});

Meteor.publish("room_roomname",function(roomname){
check(roomname, String);
return Scenes.find({"room_id":roomname});	
});

//Meteor.publish("room_scenes",function(id){
//check(id, Number);
//return Scenes.find({"scenes_id":id});	
//})