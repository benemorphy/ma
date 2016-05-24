Template.mainboard.helpers({
	backimage:function(){
		var scene_id=Scenes.findOne({type:"current_scene_id"}).current_scene_id;
		var a=Scenes.findOne({type:"scene_background",scene_id:scene_id});
		if (a) {return a.backimage}
			else {return ""};
	}
})


Template.mainboard.onRendered(function(){

})