Template.mainboard.helpers({
	backimage:function(){
		var scene_id=Scenes.findOne({type:"current_scene_id"}).current_scene_id;
		var a=Scenes.findOne({type:"scene_background",scene_id:scene_id});
		if (a) {return a.backimage}
			else {return ""};
	}
})


Template.mainboard.onRendered(function(){
var PrintscreenJs = {
    
    option: {
      _pasteCatcher: null,
      _srcCatched: null,
      _el: null,
      _type: null
    },
    
    initialize: function(obj){
      this.option._el = obj;
      this.option._type = document.getElementById(this.option._el).tagName;
      this._clipboard();
      this._eventListener();
    },

    _clipboard: function(){
      if (!window.Clipboard){
          PrintscreenJs.option._pasteCatcher = document.createElement("div");
          PrintscreenJs.option._pasteCatcher.setAttribute("id", "_clip");
          PrintscreenJs.option._pasteCatcher.setAttribute("contenteditable", "");
          PrintscreenJs.option._pasteCatcher.style.cssText = 'opacity:0;position:fixed;top:0px;left:0px;';
          PrintscreenJs.option._pasteCatcher.style.marginLeft = "-20px";
          document.body.appendChild(PrintscreenJs.option._pasteCatcher);

          PrintscreenJs.option._pasteCatcher.focus();
          document.getElementById('_clip').addEventListener('DOMSubtreeModified',function(){
            
              if(PrintscreenJs.option._pasteCatcher.children.length == 1){
                  src = PrintscreenJs.option._pasteCatcher.firstElementChild.src;
                  PrintscreenJs.option._pasteCatcher.innerHTML = '';
                  PrintscreenJs.option._srcCatched = src;
                  PrintscreenJs._createObject();
              }
          });
        }
    },

    _eventListener: function(){
        window.addEventListener("paste", this._pasteHandler);
    },

    _pasteHandler: function(e){

      if(e.clipboardData) {
          var items = e.clipboardData.items;
          if (items){
              for (var i = 0; i < items.length; i++) {
                  if (items[i].type.indexOf("image") !== -1) {
                      var blob = items[i].getAsFile();
                      var URLObj = window.URL || window.webkitURL;
                      PrintscreenJs.option._srcCatched = URLObj.createObjectURL(blob);

                  }
              }
          }
          else{
            console.log("Can't catch clipboard image !");
          }
      }
      else{
          setTimeout(this._checkInput, 1);
      }

      PrintscreenJs._createObject();
    },

    _checkInput: function(){
        var child = option._pasteCatcher.childNodes[0];
        option._pasteCatcher.innerHTML = "";

        if (child){
            if(cild.tagName === "IMG"){
                PrintscreenJs.option._srcCatched = child.src;
            }
        }
    },

    _createObject: function(){

      if(this.option._type == 'IMG'){
          var image = document.getElementById(this.option._el);
          image.src = this.option._srcCatched;
          console.log(this.option._srcCatched);

      }

      else if(this.option._type == 'CANVAS'){
        var canvas = document.getElementById(this.option._el);
        var ctx = canvas.getContext("2d");
        var pastedImage = new Image();
        pastedImage.onload = function() {
          ctx.drawImage(pastedImage, 0, 0,pastedImage.width*0.7,pastedImage.height*0.7);
        }
        pastedImage.src = PrintscreenJs.option._srcCatched;
      }

      else{
        console.log('Element tag is undefined ! clipboard src: ' + PrintscreenJs.option._srcCatched);
      }
    }

};
///
PrintscreenJs.initialize('img_invisible');
///
var img=document.getElementById('img_invisible');
img.onload=function(){
  var img=document.getElementById('img_invisible');
    //这里尚未添加事件钩子，先用笨办法将图片存入服务器

    var ann_canvas = document.getElementById('canvas_invisible');
    var paper_ctx=ann_canvas.getContext('2d');
    var a=(img.width)/(img.height);
    paper_ctx.drawImage(img,0,0,img.width,img.height,0,0,ann_canvas.height*a,ann_canvas.height);  
      var dataurl=ann_canvas.toDataURL("image/jpeg",0.7);
  var name = Scenes.findOne().room_id;
  var scene_id=Scenes.findOne({type:"current_scene_id"}).current_scene_id
    var c=Scenes.findOne({type:"scene_background",scene_id:scene_id});
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
})

