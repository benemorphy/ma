Template.sceneitem.helpers({
	sceneitem:function(){
		//var a = document.createElement('a');
		var a=this.current_scene_id;
		//console.log (this);
		//return this.room_id+":"+a.toString(10);
		return "  scene_id:" + a.toString(10);
		//return "abcd";

	}
	
})