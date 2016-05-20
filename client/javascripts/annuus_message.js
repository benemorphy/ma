	var message = document.getElementById('message');
      
	  $('#message').keyup(function(e) {
        //表单提交发送信息给SocketIO服务器,服务器端监听message事件即可获取到信息.
		var msg=message.value;
		if (e.keyCode == 13 && msg.trim().length !== 0) {
       
		$("#pushmessage").html(message.value);
		
		$('#message').val("");
		};
        return false;
      });
	  //
	   //客户端监听push message事件,这是服务器端广播的,广播给除了发送消息的浏览器之外的全部浏览器
      
	  
	 

  
	