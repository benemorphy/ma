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
        return Scenes.find({type:"comment_message"}, { sort: { time: -1}});
    }
})
//Template.myPictures.onRendered(function () {
  // Use the Packery jQuery plugin
  //this.$('.container').packery({
  	Template.meetingroom.onRendered(function(){
var current_scene_id=0;

      //////////////////////
	  ///this.$('#message').keyup(function(e) {
        //表单提交发送信息给SocketIO服务器,服务器端监听message事件即可获取到信息.
    ///var msg=message.value;
    ///if (e.keyCode == 13 && msg.trim().length !== 0) {
       
    ///$("#pushmessage").html(message.value);
    
    ///$('#message').val("");
    ///};
    ///    return false;
    ///  });
////////////////
  		this.$('#scene_id_1st').click(function(){
  		current_scene_id=0;
      alert (current_scene_id.toString(10));
  		})
  			
  		this.$('#scene_id_next').click(function(){
      current_scene_id=current_scene_id+1;
       alert (current_scene_id.toString(10));
      })
  	})


    Template.meetingroom.events={

 'keydown input#message' : function (event) {
 if (event.which == 13) { // 13 is the enter key event
     
        var name = 'benechen';
      var message = document.getElementById('message');

      if (message.value != '') {
        Scenes.insert({
          type:"comment_message",
          name: name,
          message: message.value,
          room_id:name,
          time: Date.now(),
          scene_id:3,
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    

  }

    }}