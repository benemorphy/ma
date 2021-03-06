Template.meetingroom.helpers({
scenes:function(){
	return Scenes.find();
},
current_scene:function(scene_id){
	return Scenes.find({scenes_id:scene_id});
},
current_scene_ids:function(){
	return Scenes.find({type:"current_scene_id"})
}
 
})







Template.scene_id.helpers({
  current_scene_id:function() {
    var scene_id=Scenes.findOne({type:"current_scene_id"});
    if (scene_id) {return scene_id.current_scene_id}
      else { 
        
        return 0};
  }
})

//Template.myPictures.onRendered(function () {
  // Use the Packery jQuery plugin
  //this.$('.container').packery({
Template.scene_id.events({
  'click button#scene_id_1st'(event, instance){
    
    var id =Scenes.findOne({type:"current_scene_id"})._id;
  Scenes.update({_id:id},{$set:{current_scene_id:0}})
  },
  'click button#scene_id_pre'(event, instance){
    var scene_id=Scenes.findOne({type:"current_scene_id"}).current_scene_id-1;
    //alert("-1");
    var id =Scenes.findOne({type:"current_scene_id"})._id;
    Scenes.update({_id:id},{$set:{current_scene_id:scene_id}})
  },
  'click button#scene_id_next'(event, instance){
    var scene_id=Scenes.findOne({type:"current_scene_id"}).current_scene_id+1;
    
    var id =Scenes.findOne({type:"current_scene_id"})._id;
    Scenes.update({_id:id},{$set:{current_scene_id:scene_id}})
  }
})


    Template.meetingroom.events={

 'keydown input#message' : function (event) {
 if (event.which == 13) { // 13 is the enter key event
     var room_id=Meteor.user().username;
        var name = Scenes.findOne().room_id;
      var message = document.getElementById('message');

      if (message.value != '') {
        Scenes.insert({
          type:"comment_message",
          name: name,
          message: message.value,
          room_id:name,
          time: Date.now(),
          scene_id:Scenes.findOne({type:"current_scene_id"}).current_scene_id,
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
}}
  };

Template.meetingroom.onRendered(function(){
  //paper.install(window);
//  PrintscreenJs.initialize('paperjs_canvas');
  
///

  $('#newnote').click(function(){
 $.getScript("/javascripts/paperjs_newnote.js")});
$('#sketch_draw').click(function(){

    $.getScript("/javascripts/paperjs_sketch.js")});

//alert("here")
});

Template.meetingroom.onCreated(function(){
 
 var scene_id=Scenes.findOne({type:"current_scene_id"});
    
    if (scene_id) {return scene_id.current_scene_id}
      else { 
        var room_id=Meteor.user().username;
        var name = Meteor.user().username;
        Scenes.insert({
"meetingroom":"XFuKDFd5cLSKmQMe7",
"type":"current_scene_id",
 "room_id":name,
"current_scene_id":0

})
};//end else
})

