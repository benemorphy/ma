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

Template.messages.helpers({
    messages: function() {
      var scene_id=Scenes.findOne({type:"current_scene_id"}).current_scene_id;
        return Scenes.find({type:"comment_message",scene_id:scene_id}, { sort: { time: -1}});
    }
})


Template.scene_id.onCreated(function set_current_scene_id(){
  
var a=Scenes.findOne({type:"current_scene_id"})
var b=a.current_scene_id;
this.current_scene_id = new ReactiveVar(b);
})


Template.scene_id.helpers({
  current_scene_id() {
    return Template.instance().current_scene_id.get();
  }
})

//Template.myPictures.onRendered(function () {
  // Use the Packery jQuery plugin
  //this.$('.container').packery({
Template.scene_id.events({
  'click button#scene_id_1st'(event, instance){
    instance.current_scene_id.set(0);
    var id =Scenes.findOne({type:"current_scene_id"})._id;
  Scenes.update({_id:id},{$set:{current_scene_id:0}})
  },
  'click button#scene_id_pre'(event, instance){
    var a=instance.current_scene_id.get()-1;
    instance.current_scene_id.set(a);
    var id =Scenes.findOne({type:"current_scene_id"})._id;
    Scenes.update({_id:id},{$set:{current_scene_id:a}})
  },
  'click button#scene_id_next'(event, instance){
    var a=instance.current_scene_id.get()+1;
    instance.current_scene_id.set(a);
    var id =Scenes.findOne({type:"current_scene_id"})._id;
    Scenes.update({_id:id},{$set:{current_scene_id:a}})
  }
})


    Template.meetingroom.events={

 'keydown input#message' : function (event) {
 if (event.which == 13) { // 13 is the enter key event
     
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
    

  }

    }}