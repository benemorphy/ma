Template.sketchs.helpers({
  sketchs:function(){

    var scene_id=Scenes.findOne({type:"current_scene_id"}).current_scene_id;
    
        var sketchs=Scenes.find({type:"comment_sketch",scene_id:scene_id}, { sort: { time: -1}});	
      return sketchs;
  }

})

Template.sketchs.onRendered(function(){
	paper.setup('paperjs_canvas');
})


Template.sketch.helpers({
	display_sketch:function(){

		var x=this.sketch;

		var dummy = document.createElement('div');
		//dummy.id="display_sketch";
    dummy.innerHTML = '<svg class="sketch" height="360"  width="640"  version="1.1" viewBox="0 0 640 360"  >' + x + '</svg>';
    //console.log(dummy);
		return dummy.innerHTML;
	}
})
	
Template.sketch.onRendered(function(){
	
})		
	
