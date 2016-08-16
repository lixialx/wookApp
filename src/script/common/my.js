//引入模版
var myView=require("../tpl/my.string");

//定义视图
SPA.defineView('my',{
	//转载HTML
	html:myView,

	//引入delegated插件，用于绑定tap事件
    plugins:["delegated"],

    //绑定元素的tap事件
    bindActions:{
          
       },
       
})