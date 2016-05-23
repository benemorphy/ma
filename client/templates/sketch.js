Template.sketchs.helpers({
  sketchs:function(){

    var scene_id=Scenes.findOne({type:"current_scene_id"}).current_scene_id;
    
        var sketchs=Scenes.find({type:"comment_sketch",scene_id:scene_id}, { sort: { time: -1}});
        //var sketch=Scenes.findOne({type:"comment_sketch",scene_id:scene_id}).sketch;
        //paper.setup('paperjs_canvas');
        //
       
        
			//
			
      return sketchs;
  }

})

Template.sketchs.onRendered(function(){
	paper.setup('paperjs_canvas');
})


Template.sketch.helpers({
	display_sketch:function(){
		//var path = new paper.Path({});
		//path.importJSON(this.sketch);

		return this.sketch;
	}
})
	
Template.sketch.onRendered(function(){
	paper.setup('receive_canvas');
})		
	
