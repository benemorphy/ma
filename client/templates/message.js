Template.messages.helpers({
    messages: function() {
      var scene_id=Scenes.findOne({type:"current_scene_id"}).current_scene_id;
        return Scenes.find({type:"comment_message",scene_id:scene_id}, { sort: { time: -1}});
    }
})