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
		//var path = new paper.Path({});
		//path.importJSON(this.sketch);
		var x=this.sketch;
	console.log(x);
       //x="\<circle id=\"redcircle\" cx=\"50\" cy=\"50\" r=\"50\" fill=\"red\" \/\>"
		//return {path:x.substr(5,(x.length-7))};
		var dummy = document.createElement('div');
    dummy.innerHTML = '<svg height="360" width="640"  version="1.1" viewBox="0 0 640 360"  >' + x + '</svg>';
    //console.log(dummy);
		return dummy.innerHTML;
	}
})
	
Template.sketch.onRendered(function(){
	
})		
	
