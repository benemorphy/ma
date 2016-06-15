



Template.imagefile.events({
	'change input#file'(event){
		var file = document.getElementById("file").files[0];
		if(!/image\/\w+/.test(file.type)){  
			alert("看清楚，这个需要图片！");  
			return false;  
		}  ;
		var reader = new FileReader();  
    //将文件以Data URL形式读入页面  
    reader.readAsDataURL(file);
    reader.onload=function(e){
    	var img=document.getElementById('img_invisible');
    	//var img=new Image();
    	img.src = this.result;
	//alert (img.src.toString());
	img.onload=function(){
		var ann_canvas = document.getElementById('canvas_invisible');
		var paper_ctx=ann_canvas.getContext('2d');
	   //alert(paper_ctx);
	   var a=(img.width)/(img.height);
	   var b=(ann_canvas.width)/(ann_canvas.height);

	   paper_ctx.fillStyle="#ffffff";
	   paper_ctx.fillRect(0,0,ann_canvas.width,ann_canvas.height);
	   if (a>b)
	   	{paper_ctx.drawImage(img,0,0,img.width,img.height,0,(ann_canvas.height-(ann_canvas.width/a)),ann_canvas.width,(ann_canvas.width/a))}
	   else
	   	{paper_ctx.drawImage(img,0,0,img.width,img.height,(ann_canvas.width-(ann_canvas.height*a)),0,ann_canvas.height*a,ann_canvas.height)}


	//here add sth to scale img linear;
	
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

	 		};
};//end reader.onload

},
'haschange img#img_background'(event){
	console.log ("img_background has been changed");
}
})
