##界面
	添加搜索栏？
		添加emoji表情
		角色，动作

	服务（知识）体系图？
	首页展示栏(设计服务展示)
	展示目录，缩略图

##数据格式
###是否增加时间线？
	>时间线及非时间线模式
	>基于场景的设计沟通，虚拟建造交流平台

	>页面缩略图

###场景模板
	公有模板
		ppt模板
		数据可视化模板
		地图模板
		三维建造
		角色对话模板	

		>innerHTML--JSON

	私有模板
###meeting
meeting ={
scenes:{collection of backround}
scenes_id:
time_stamp:
backround:image or ppt_page
}

>页面缩略图

##comments
comments:{
	comment_id:
	comment_type:{type-drawing,type-text,type-sound }
	drawings:
	texts:
	soundpieces:

}

drawings:{
	type:
	keypoints:

}

texts:{
	content:

}

## collection
/lib/collections

## 发布及订阅规则

订阅相同meetingroonm_id
>未来考虑公告牌，开放会议等等（无password）
>公有，私有群
>考虑note，vote机制

## 路由
登录
path格式
>/

## container 及动态插入模块
>3d模块
>地图模块



登录界面
>meetingroom_id
>password

帮助文档
>用户名：demo001
>密码：demo001

进入会议室
path格式
>/meetings/room_id/scene_id
登录后，进入会议室，渲染当前scene
目前，当前的scene仅仅渲染backgroud(empty或者backgroud_image)
>>未来能够渲染ppt页面
>>*未来需要加入participate_id,以便将每个参与者显示出来*

path格式
>/meetings/rooms_list
*未来根据参与者的id确定会议列表，以便更快进入*

## 数据驱动
当前scene同步更新
每次修改，comment，重新渲染当前scene，并且将comment存入数据库中。

可以到以往的scene中查看
++？能否编辑，是否开放编辑，在会议后整理，编辑功能是需要的++


##虚拟数据
从原有annuus应用中虚拟出来,利用console.log


##运维
###日志
