Template.toolbar01.events ({
	'click button#paste'(event,instance){
		var img=document.getElementById('img_background');
		///console.log("paste clicked");
		//这里尚未添加事件钩子，先用笨办法将图片存入服务器
		var imgsrc=img.src;

		var ann_canvas = document.getElementById('canvas_invisible');
		var paper_ctx=ann_canvas.getContext('2d');
		var a=(img.width)/(img.height);
		console.log("img.width: "+img.width);
		console.log("img.height: "+img.height);
		//paper_ctx.drawImage(img,0,0);
		//paper_ctx.drawImage(img,0,0,img.width,img.height);
		//paper_ctx.drawImage(img,0,0,img.width,img.height,0,(ann_canvas.height-(ann_canvas.width/a)),ann_canvas.width,(ann_canvas.width/a));
		paper_ctx.drawImage(img,0,0,img.width,img.height,0,0,ann_canvas.height*a,ann_canvas.height);	
			var dataurl=ann_canvas.toDataURL("image/jpeg",0.7);
	var name = Scenes.findOne().room_id;
	var scene_id=Scenes.findOne({type:"current_scene_id"}).current_scene_id
	//alert( dataurl)
	  //socket.emit ('imageuri',{uri:dataurl})
	  var c=Scenes.findOne({type:"scene_background",scene_id:scene_id});
	 // alert (c._id);
	 if (c)
	 	{var id=c._id;

	 		Scenes.update(
	 			{_id:id},
	 			{$set:{name: name,
	 				backimage: dataurl,
	 				room_id:name,
	 				time: Date.now()}}


	 				)}
	 		else {
	 			Scenes.insert({
	 				type:"scene_background",
	 				scene_id:scene_id,
	 				name: name,
	 				backimage: dataurl,
	 				room_id:name,
	 				time: Date.now()
	 			})}

	}
})