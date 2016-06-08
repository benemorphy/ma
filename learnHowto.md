###如何在sublime中添加插件，让js自动排版，检查js文档
##javascript
###几个概念之间的关系
环境：chrome 下的console
prototype,constructor
object,function
this

>var person = function(name){
   this.name = name
  };
  person.prototype.getName = function(){
     return this.name; 
  }
  
  

++  typeof person->"function"++
 >abc=new person("abc") ->person {name: "abc"}
 
typeof abc ->++"object"++
abc.getName()->++"abc"++

abc.constructor->++function(name){
   		this.name = name
  	}++


person.prototype->++Object {}
			constructor:function(name)
			getName:function()
			__proto__:Object++
  
  
  