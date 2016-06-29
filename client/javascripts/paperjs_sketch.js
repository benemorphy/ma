		var tool;	
		// Create a simple drawing tool:
		if (tool)
		{tool.remove();
		console.log ("old tool had been removed")} ;
		var tool=new paper.Tool();	
			var path;
		//var current_color=$('#colorpicker')[0].value;
		tool.onMouseDown = function(event) {
	path = new paper.Path({
			segments: [event.point],
			strokeJoin: 'bevel',
			strokeColor: $('#colorpicker')[0].value,
			strokeWidth: $("#brush_width")[0].value,
			opacity:($("#brush_opacity")[0].value)/100,
			fullySelected: false
	});
		}
//
		tool.onMouseDrag = function(event) {
			path.add(event.point);
		}
		
		tool.onMouseUp=function (event) {
  
	path.simplify(10);
	path.applyMatrix=true;
	path.strokeJoin='bevel';
	var x=path.exportSVG({ asString: true});
	//console.log(x);
	var name = Scenes.findOne().room_id;
	var forbidden=["userguide","demo001","demo002","demo003","demo004","demo005","demo006"];
	var username=Meteor.user().username;
	if (forbidden.indexOf(username)===-1){
Scenes.insert({
         type:"comment_sketch",
         name: name,
         sketch: x,
         room_id:name,
         time: Date.now(),
         scene_id:Scenes.findOne({type:"current_scene_id"}).current_scene_id,
     });

	};
       
       path.remove();
       
        //tool.remove();
};
	