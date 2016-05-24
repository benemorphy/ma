		var tool=new paper.Tool();	
		// Create a simple drawing tool:
		
			// console.log (tool);
			var path;
		
		tool.onMouseDown = function(event) {
			//console.log("enter sketch mousedown ");
			// Create a new path and set its stroke color to black:
	path = new paper.Path({
			segments: [event.point],
			strokeJoin: 'bevel',
			strokeColor: 'red',
			strokeWidth: 3,
		// Select the path, so we can see its segment points:
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
	path.strokeJoin='round';
	//var x=path.exportJSON(Object);
	var x=path.exportSVG({ asString: true});
	
	console.log("this is :");
	console.log (x);
	//console.log(x.toString());
	//alert (x);
	var name = Scenes.findOne().room_id;
      
      
        Scenes.insert({
          type:"comment_sketch",
          name: name,
          sketch: x,
          room_id:name,
          time: Date.now(),
          scene_id:Scenes.findOne({type:"current_scene_id"}).current_scene_id,
      })
        
//paper.setup('paperjs_canvas');
	//socket.emit ('imageuri_mark',{obj:x});
   
}
	